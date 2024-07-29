declare module "order/cart" {
  import type { FC } from "react";

  export default function Cart(props: { checkoutUrl?: string }): ReturnType<FC>;
}

declare module "order/checkout" {
  import type { FC } from "react";

  export default function Checkout(): ReturnType<FC>;
}
