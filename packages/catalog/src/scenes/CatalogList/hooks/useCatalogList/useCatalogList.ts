import type { Catalog } from "shared-types";

import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "@services/product";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const getKey = (category?: string) => {
  if (!category) {
    return ["products"];
  }

  return ["products", "category", category];
};

export const useCatalogList = () => {
  const { category } = useParams<{ category: string }>();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const { data, isLoading, isError } = useQuery({
    queryKey: getKey(category),
    queryFn: fetchProducts,
  });

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  useEffect(() => {
    const handleFilterEvent = (
      event: CustomEvent<Catalog.FilterPriceEvent>
    ) => {
      const { min, max } = event.detail;

      setMin(min);
      setMax(max);
    };

    window.addEventListener("catalog-filter-price", handleFilterEvent);

    return () => {
      window.removeEventListener("catalog-filter-price", handleFilterEvent);
    };
  }, []);

  const filtered = data
    ?.filter((item) => {
      return (!+min || item.price >= +min) && (!+max || item.price <= +max);
    })
    .filter((item) => {
      return !search || item.name.toLowerCase().includes(search.toLowerCase());
    });

  return { catalogList: filtered, isLoading, isError };
};
