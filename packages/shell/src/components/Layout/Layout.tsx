import type { FC } from "react";

import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import { Container, Flex, Box } from "@mantine/core";

const Header = lazy(() => import("marketing/header"));
const Footer = lazy(() => import("marketing/footer"));

const Layout: FC = () => {
  return (
    <Flex sx={{ flex: 1 }} direction="column" justify="space-between">
      <Suspense>
        <Header />
      </Suspense>
      <Flex w="100%" sx={{ flex: 1 }} py="xl" component="main">
        <Container fluid w={{ sm: "sm", md: 800, lg: 1330, xl: 1400 }}>
          <Outlet />
        </Container>
      </Flex>
      <Suspense fallback="loading">
        <Footer />
      </Suspense>
    </Flex>
  );
};

export default Layout;
