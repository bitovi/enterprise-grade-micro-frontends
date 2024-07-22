import { Suspense, lazy } from "react";
import { Container, Skeleton, Text, Title, Flex, Button } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

// @ts-ignore
const About = lazy(() => import("marketing/about"));

const AboutScene = () => {
  return (
    <ErrorBoundary fallback={<AboutError />}>
      <Suspense fallback={<AboutSkeleton />}>
        <About />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AboutScene;

const AboutSkeleton = () => {
  return (
    <Container p="md">
      <Skeleton h={45} />
      <Skeleton mt="md" h={50} />
      <Skeleton mt="md" h={30} />
      <Skeleton mt="md" h={50} />
      <Skeleton mt="md" h={50} />
      <Skeleton mt="md" h={30} />
      <Skeleton mt="md" h={150} />
      <Skeleton mt="md" h={30} />
      <Skeleton mt="md" h={75} />
    </Container>
  );
};

const AboutError = () => {
  return (
    <Flex align="center" direction="column">
      <Title mb="md" c="red">
        Something Went Wrong!
      </Title>
      <Text>We could not load the About page</Text>
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
