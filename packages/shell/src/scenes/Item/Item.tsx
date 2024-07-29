import type { FC } from "react";

import { Suspense, lazy } from "react";
import { Container, Text, Title, Flex, Button } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

const Item = lazy(() => import("catalog/item"));

const ItemScene: FC = () => {
  return (
    <ErrorBoundary fallback={<ItemError />}>
      <Suspense fallback={<ItemSkeleton />}>
        <Item />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ItemScene;

const ItemSkeleton = () => {
  return <Container />;
};

const ItemError = () => {
  return (
    <Flex align="center" direction="column">
      <Title mb="md" c="red">
        Something Went Wrong!
      </Title>
      <Text>We could not load the item page</Text>
      <Flex mt="xl" gap="xl">
        <Button component={Link} variant="default" to="/">
          Go Home
        </Button>
        <Button component={Link} to="/shop">
          Go to Shop
        </Button>
      </Flex>
    </Flex>
  );
};
