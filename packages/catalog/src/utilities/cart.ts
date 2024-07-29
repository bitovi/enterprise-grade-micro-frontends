import { CatalogItem } from "@services/shared/types";
import { Order } from "shared-types";

type CartItem = Omit<CatalogItem, "category" | "rating">;

export const addToCart = ({
  id,
  name,
  price,
  description,
  imgSrc,
}: CartItem) => {
  window.dispatchEvent(
    new CustomEvent<Order.AddToCartEvent>("add-to-cart", {
      detail: {
        item: {
          id,
          title: name,
          price,
          description,
          image: imgSrc,
        },
      },
    })
  );
};

export const toCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    amount
  );
