import type { FC } from "react";

import { Suspense, lazy } from "react";

import { Container, Skeleton, Text, Title, Flex, Button } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

const Contact = lazy(() => import("marketing/contact"));

const ContactScene: FC = () => {
  return (
    <ErrorBoundary fallback={<ContactError />}>
      <Suspense fallback={<ContactSkeleton />}>
        <Contact />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ContactScene;

const ContactSkeleton: FC = () => {
  return (
    <Container p="md">
      <Skeleton h={45} />
      <Skeleton mt="md" h={30} />
      <Skeleton mt="md" h={30} />
      <Skeleton mt="md" h={30} />
    </Container>
  );
};

const ContactError: FC = () => {
  return (
    <Flex align="center" direction="column">
      <Title mb="md" c="red">
        Something Went Wrong!
      </Title>
      <Text>We could not load the contact page</Text>
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
