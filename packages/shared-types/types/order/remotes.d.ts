declare module "order/cart" {
  import type { FC } from "react";

  export default function Cart(props: { checkoutUrl?: string }): ReturnType<FC>;
}

declare module "order/checkout" {
  import type { FC } from "react";

  export default function Checkout(props: { id?: number; homePath?: string }): ReturnType<FC>;
}

declare module "order/cart-injector" {
  import type { FC } from "react";

  interface BaseCart {
    id: number;
    userId: number;
  }

  interface CartService extends BaseCart {
    products: Array<{ productId: number; quantity: number }>;
  }

  type Product = Order.CatalogItem & { quantity: number };

  interface UserCart extends BaseCart {
    tax: number;
    subTotal: number;
    total: number;
    products: Array<Product>;
  }

  interface AddToCartEvent {
    item: CatalogItem;
  }

  interface CatalogItem {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }

  export type UseCart = () => [UserCart, (ev: AddToCartEvent) => void];

  export default function Checkout(props: { renderWithCart: (useCart: UseCart) => ReactNode }): ReturnType<FC>;
}
