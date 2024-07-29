import type { FC } from "react";

namespace Catalog {
  export type CatalogList = FC;
  export type Filter = FC;
  export type Search = FC;
  export type CatalogItem = FC;

  type FilterPriceEvent = { min: string; max: string };
}

type CatalogEvents = {
  "catalog-filter-price": CustomEvent<Catalog.FilterPriceEvent>;
};

declare global {
  interface Window {
    addEventListener<K extends keyof CatalogEvents>(
      type: K,
      listener: (this: Window, ev: CatalogEvents[K]) => void
    );
    removeEventListener<K extends keyof CatalogEvents>(
      type: K,
      listener: (ev: CatalogEvents[K]) => void
    );
    dispatchEvent<K extends keyof CatalogEvents>(ev: CatalogEvents[K]);
  }
}
