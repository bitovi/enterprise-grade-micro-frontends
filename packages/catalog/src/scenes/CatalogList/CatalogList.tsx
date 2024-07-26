import type { FC, ReactNode } from "react";

import { Flex } from "@mantine/core";

import SkeletonCatalogList from "./components/SkeletonCatalogList";
import CatalogListItem from "./components/CatalogListItem";
import CatalogListError from "./components/CatalogListError";
import { useCatalogList } from "./hooks/useCatalogList";

/// Leave separate - these are temporary
import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
///

const CatalogList: FC = () => {
  const { isError, isLoading, catalogList } = useCatalogList();

  if (isLoading) {
    return <SkeletonCatalogList />;
  }

  if (isError) {
    return <CatalogListError />;
  }

  return (
    <TempWrapper>
      <Flex gap="md" direction="row" wrap="wrap" p="md">
        {catalogList?.map((product) => (
          <CatalogListItem
            key={product.name}
            {...product}
            href={`/shop/item/${product.href}`}
          />
        ))}
      </Flex>
    </TempWrapper>
  );
};

export default CatalogList;

const TempWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>{children}</MantineEmotionProvider>
    </MantineProvider>
  );
};
