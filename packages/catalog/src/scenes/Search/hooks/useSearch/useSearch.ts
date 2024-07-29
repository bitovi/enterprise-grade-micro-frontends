import type { Dispatch, SetStateAction } from "react";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebouncedValue } from "@mantine/hooks";

export const useSearch = (): {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
} => {
  // Placeholders remove once ready
  const search = "";
  const setSearch: Dispatch<SetStateAction<string>> = (newString) => {};
  //

  return {
    search,
    setSearch,
  };
};
