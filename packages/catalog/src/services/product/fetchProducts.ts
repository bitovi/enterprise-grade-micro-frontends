import { CatalogItem } from "@services/shared/types";

import { QueryKey } from "@tanstack/react-query";

const patchUrl = (url: string): string => {
  return url.replace(/\.jpg$/, 't.png');
}

export async function fetchProducts({
  queryKey,
}: {
  queryKey: QueryKey;
}): Promise<CatalogItem[]> {
  try {
    const url = `https://fakestoreapi.com/${queryKey.join("/")}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText || "Unknown error occurred");
    }

    const data = await response.json();
    const mappedData: CatalogItem[] = data.map((product: any) => ({
      id: product.id,
      href: product.id,
      imgSrc: patchUrl(product.image),
      name: product.title,
      price: product.price,
    }));

    return mappedData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching products: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
}
