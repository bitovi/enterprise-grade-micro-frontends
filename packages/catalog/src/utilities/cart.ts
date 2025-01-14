import { CatalogItem } from "@services/shared/types";

type CartItem = Omit<CatalogItem, "rating">;

export const addToCart = ({ id, name, price, description, imgSrc, category }: CartItem) => {};

export const toCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
