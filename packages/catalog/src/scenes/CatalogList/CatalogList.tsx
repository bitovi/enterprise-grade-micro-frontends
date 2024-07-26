import type { Catalog } from "shared-types";

import { Flex } from "@mantine/core";

import SkeletonCatalogList from "./components/SkeletonCatalogList";
import CatalogListItem from "./components/CatalogListItem";
import CatalogListError from "./components/CatalogListError";
import { useCatalogList } from "./hooks/useCatalogList";

const CatalogList: Catalog.CatalogList = () => {
  const { isError, isLoading, catalogList } = useCatalogList();

  if (isLoading) {
    return <SkeletonCatalogList />;
  }

  if (isError) {
    return <CatalogListError />;
  }

  return (
    <Flex gap="md" direction="row" wrap="wrap" p="md">
      {catalogList?.map((product) => (
        <CatalogListItem
          key={product.name}
          {...product}
          href={`/shop/item/${product.href}`}
        />
      ))}
    </Flex>
  );
};

export default CatalogList;
