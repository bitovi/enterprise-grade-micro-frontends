declare module "catalog/list" {
  import type { FC } from "react";

  export default function CatalogList(): ReturnType<FC>;
}

declare module "catalog/item" {
  import type { FC } from "react";

  export default function CatalogItem(): ReturnType<FC>;
}

declare module "catalog/filter" {
  import type { FC } from "react";

  export default function Filter(): ReturnType<FC>;
}

declare module "catalog/search" {
  import type { FC } from "react";

  export default function Search(): ReturnType<FC>;
}
