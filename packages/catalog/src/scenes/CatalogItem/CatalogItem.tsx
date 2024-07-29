import type { FC } from "react";

import {
  Container,
  Grid,
  Stack,
  Divider,
  Text,
  Breadcrumbs,
  Anchor,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchProduct } from "@services/product";

import Images from "./components/Images";
import Details from "./components/Details";
import Related from "./components/Related";
import CatalogItemSkeleton from "./components/CatalogItemSkeleton";
import CatalogItemError from "./components/CatalogItemError";

const CatalogItem: FC = () => {
  const productId = "1";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
    enabled: !!productId,
  });

  if (isLoading) {
    return <CatalogItemSkeleton />;
  }

  if (isError || !data) {
    return <CatalogItemError />;
  }

  return (
    <Container fluid pt="lg">
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="md">
            <Breadcrumbs mb="xl">
              <Anchor component={Link} to="/shop">
                Shop
              </Anchor>
              <Text>{data.name}</Text>
            </Breadcrumbs>
            <Images {...data} />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="md" px="md">
            <Details {...data} />
            <Divider my="lg" />
            <Related {...data} />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default CatalogItem;
