import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { Container, Flex, Box } from "@mantine/core";

const Layout: FC = () => {
  return (
    <Flex sx={{ flex: 1 }} direction="column" justify="space-between">
      <Box component="header" c="white" py="lg" bg="dark">
        header
      </Box>
      <Flex w="100%" sx={{ flex: 1 }} py="xl" component="main">
        <Container fluid w={{ sm: "sm", md: 800, lg: 1330, xl: 1400 }}>
          <Outlet />
        </Container>
      </Flex>
      <Box component="footer" c="white" py="lg" bg="dark">
        footer
      </Box>
    </Flex>
  );
};

export default Layout;
