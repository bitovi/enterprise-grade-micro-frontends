import type { Catalog } from "shared-types";

import { Container, Grid, Stack, Divider, Text, Breadcrumbs, Anchor } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchProduct } from "@services/product";

import Images from "./components/Images";
import Details from "./components/Details";
import Related from "./components/Related";
import CatalogItemSkeleton from "./components/CatalogItemSkeleton";
import CatalogItemError from "./components/CatalogItemError";
import { FC, lazy, Suspense } from "react";

import type { UseCart } from "order/cart-injector";

const CatalogItem: FC<{ useCart: UseCart }> = ({ useCart }) => {
  const { productId } = useParams<{ productId: string }>();

  const [cart, addToCart] = useCart();

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
              <Text>{cart.total.toFixed(2)}</Text>
            </Breadcrumbs>
            <Images {...data} />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="md" px="md">
            <Details {...data} addToCart={addToCart} />
            <Divider my="lg" />
            <Related {...data} />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

// export default CatalogItem;

const CartProvider = lazy(() => import("order/cart-injector"));

const ItemWrapper: Catalog.Item = () => {
  return (
    <Suspense>
      <CartProvider
        renderWithCart={(useCart) => {
          return <CatalogItem useCart={useCart} />;
        }}
      />
    </Suspense>
  );
};

export default ItemWrapper;
