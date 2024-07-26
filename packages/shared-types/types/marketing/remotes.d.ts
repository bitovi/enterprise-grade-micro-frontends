/**
 * Marketing Modules go here
 *
 * marketing/header
 * marking/footer
 */

declare module "marketing/header" {
  import type { FC } from "react";

  export default function Header(): ReturnType<FC>;
}

declare module "marketing/footer" {
  import type { FC } from "react";

  export default function Footer(): ReturnType<FC>;
}
