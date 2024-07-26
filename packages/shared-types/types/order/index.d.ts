import type { FC } from "react";

export namespace Order {
  export type Cart = FC<{ checkoutUrl?: string }>;
}
