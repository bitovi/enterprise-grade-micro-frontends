import { cartKey, getTotals, newCart, UserCart } from "@services/cart";
import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { addToProducts, increaseQuantity, itemInCart } from "../Cart/hook/useCart/utilities";
import { Order } from "shared-types";
import { useLocalStorage } from "@mantine/hooks";

const refetchFromBackEnd = async () => {
  const raw = localStorage.getItem(cartKey);

  if (!raw) return newCart;

  return JSON.parse(raw) as UserCart;
};

const updateCart = async (cart: UserCart) => {
  localStorage.setItem(cartKey, JSON.stringify(cart));
  return;
};

const useCart = () => {
  const [cart, setCart] = useState<UserCart>();

  useEffect(() => {
    async function fetchCart() {
      refetchFromBackEnd().then(setCart);
    }

    fetchCart();
  }, []);

  useEffect(() => {
    const onAddToCart = (event: CustomEvent<Order.AddToCartEvent>) => {
      const { item } = event.detail;

      setCart((cart) => {
        const currentCart = cart || newCart;

        const isExistingItem = itemInCart(currentCart, item);
        const updatedProducts = isExistingItem
          ? increaseQuantity(currentCart.products, item.id)
          : addToProducts(currentCart.products, item);

        const nextCart = {
          ...currentCart,
          products: updatedProducts,
          ...getTotals(updatedProducts),
        };

        updateCart(nextCart);

        return nextCart;
      });
    };

    window.addEventListener("add-to-cart", onAddToCart);

    return () => window.removeEventListener("add-to-cart", onAddToCart);
  }, []);

  return [
    cart,
    (addToCartEvent: Order.AddToCartEvent) => {
      window.dispatchEvent(new CustomEvent("add-to-cart", { detail: addToCartEvent }));
    },
  ] as const;
};

const CartContext = createContext<{ useCart: typeof useCart }>({ useCart });

const CartInjector = ({ renderWithCart }: { renderWithCart: (uc: typeof useCart) => ReactNode }) => {
  return (
    <CartContext.Provider value={{ useCart }}>
      <CartContext.Consumer>{({ useCart }) => renderWithCart(useCart)}</CartContext.Consumer>
    </CartContext.Provider>
  );
};

export default CartInjector;
