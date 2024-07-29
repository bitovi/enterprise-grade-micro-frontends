import { CatalogItem } from "@services/shared/types";

type CartItem = Omit<CatalogItem, "category" | "rating">;

export const addToCart = ({
  id,
  name,
  price,
  description,
  imgSrc,
}: CartItem) => {};

export const toCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    amount
  );
