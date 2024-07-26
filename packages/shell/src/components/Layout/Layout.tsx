import { FC, Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import { Container, Flex } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";

import HeaderSkeleton from "./components/HeaderSkeleton";
import FooterSkeleton from "./components/FooterSkeleton";
import SiteError from "./components/SiteError";

const Header = lazy(() => import("marketing/header"));
const Footer = lazy(() => import("marketing/footer"));

const Layout: FC = () => {
  return (
    <Flex sx={{ flex: 1 }} direction="column" justify="space-between">
      <ErrorBoundary fallback={<SiteError mfe="header" />}>
        <Suspense fallback={<HeaderSkeleton />}>
          <Header />
        </Suspense>
      </ErrorBoundary>
      <Flex w="100%" sx={{ flex: 1 }} py="xl" component="main">
        <Container fluid w={{ sm: "sm", md: 800, lg: 1330, xl: 1400 }}>
          <Outlet />
        </Container>
      </Flex>
      <ErrorBoundary fallback={<SiteError mfe="footer" />}>
        <Suspense fallback={<FooterSkeleton />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </Flex>
  );
};

export default Layout;
