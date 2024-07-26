import type { FC } from "react";

export namespace Order {
  export type Cart = FC<{ checkoutUrl?: string }>;
  export type Checkout = FC<{ id?: number; homePath?: string }>;

  export interface AddToCartEvent {
    item: CatalogItem;
  }

  export interface CatalogItem {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }
}
