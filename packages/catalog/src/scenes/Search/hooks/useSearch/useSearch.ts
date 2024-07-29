import type { Dispatch, SetStateAction } from "react";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebouncedValue } from "@mantine/hooks";

export const useSearch = (): {
  search: string;
  setSearch: (newSearch: string) => void;
} => {
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const [debouncedSearch] = useDebouncedValue(search, 250);

  useEffect(() => {
    if (!debouncedSearch) {
      searchParams.delete("search");
      setSearchParams(searchParams);

      return;
    }

    setSearchParams({ ...searchParams, search: debouncedSearch });
  }, [debouncedSearch]);

  return {
    search,
    setSearch,
  };
};
