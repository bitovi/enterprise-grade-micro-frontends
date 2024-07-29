import type { FC } from "react";

import { Suspense, lazy } from "react";
import { Skeleton, Text, Title, Flex, Button, Grid } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

const Checkout = lazy(() => import("order/checkout"));

const CheckoutScene: FC = () => {
  return (
    <ErrorBoundary fallback={<CheckoutError />}>
      <Suspense fallback={<CheckoutSkeleton />}>
        <Checkout />
      </Suspense>
    </ErrorBoundary>
  );
};

export default CheckoutScene;

const CheckoutSkeleton: FC = () => {
  return (
    <Grid align="center">
      <Grid.Col span={{ md: 12, lg: 6 }}>
        <Skeleton h={260} />
      </Grid.Col>
      <Grid.Col span={{ md: 12, lg: 6 }}>
        <Skeleton h={365} />
      </Grid.Col>
    </Grid>
  );
};

const CheckoutError: FC = () => {
  return (
    <Flex align="center" direction="column">
      <Title mb="md" c="red">
        Something Went Wrong!
      </Title>
      <Text>We could not load the checkout page</Text>
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
