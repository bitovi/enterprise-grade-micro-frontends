import { CatalogItem } from "@services/shared/types";

const patchUrl = (url: string): string => {
  return url.replace(/\.jpg$/, 't.png');
}

export async function fetchProduct(
  id: string | undefined
): Promise<CatalogItem> {
  if (!id) throw new Error("Product ID is required");

  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!response.ok) {
      throw new Error(response.statusText || "Unknown error occurred");
    }

    const data = await response.json();
    const mappedData: CatalogItem = {
      id: data.id,
      href: patchUrl(data.image),
      imgSrc: patchUrl(data.image),
      name: data.title,
      price: data.price,
      description: data.description,
      category: data.category,
      rating: data.rating,
    };

    return mappedData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching product ${id}: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
}
