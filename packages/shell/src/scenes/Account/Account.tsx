import type { FC } from "react";

import { Suspense, lazy } from "react";
import {
  Container,
  Skeleton,
  Text,
  Title,
  Flex,
  Button,
  Grid,
} from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

const Account = lazy(() => import("profile/account"));

const AccountScene: FC = () => {
  return (
    <ErrorBoundary fallback={<AccountError />}>
      <Suspense fallback={<AccountSkeleton />}>
        <Account />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AccountScene;

const AccountSkeleton: FC = () => {
  return (
    <Container>
      <Skeleton mb="xl" h={45} />
      <Grid>
        <Grid.Col span={3}>
          <Skeleton h={290} />
        </Grid.Col>
        <Grid.Col span={9}>
          <Skeleton h={570} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

const AccountError: FC = () => {
  return (
    <Flex align="center" direction="column">
      <Title mb="md" c="red">
        Something Went Wrong!
      </Title>
      <Text>We could not load the account page</Text>
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
