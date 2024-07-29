import type { Order } from "shared-types";
import type { UserCart } from "@services/cart";

import { useLocalStorage } from "@mantine/hooks";
import { useEffect } from "react";

import { cartKey, getTotals, newCart } from "@services/cart";

import { addToProducts, increaseQuantity, itemInCart } from "./utilities";

export const useCart = () => {
  const [cart, setCart] = useLocalStorage<UserCart>({
    key: cartKey,
    defaultValue: newCart,
  });

  useEffect(() => {
    const handleAddToCart = (event: CustomEvent<Order.AddToCartEvent>) => {
      const { item } = event.detail;

      setCart((previousCart) => {
        const itemExists = itemInCart(previousCart, item);

        const updatedProducts = itemExists
          ? increaseQuantity(previousCart.products, item.id)
          : addToProducts(previousCart.products, item);

        return {
          ...previousCart,
          products: updatedProducts,
          ...getTotals(updatedProducts),
        };
      });
    };

    window.addEventListener("add-to-cart", handleAddToCart);
    () => {
      window.removeEventListener("add-to-cart", handleAddToCart);
    };
  }, []);

  return cart;
};
