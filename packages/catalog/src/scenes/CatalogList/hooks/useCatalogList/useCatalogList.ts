import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "@services/product";

export const useCatalogList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Add filter logic

  return { catalogList: data, isLoading, isError };
};
