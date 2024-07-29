import type { FC } from "react";

export namespace Order {
  export type Cart = FC<{ checkoutUrl?: string }>;
  export type Checkout = FC;

  export interface CatalogItem {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  }

  type AddToCartEvent = { item: Order.CatalogItem };
}

type OrderEvents = {
  "add-to-cart": CustomEvent<Order.AddToCartEvent>;
};

declare global {
  interface Window {
    addEventListener<K extends keyof OrderEvents>(
      type: K,
      listener: (this: Window, ev: OrderEvents[K]) => void
    );
    removeEventListener<K extends keyof OrderEvents>(
      type: K,
      listener: (ev: OrderEvents[K]) => void
    );
    dispatchEvent<K extends keyof OrderEvents>(ev: OrderEvents[K]);
  }
}
