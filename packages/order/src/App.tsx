import type { FC } from "react";

import { Button, Container, MantineProvider, Menu } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { Notifications } from "@mantine/notifications";

import Cart from "./scenes/Cart";
import Checkout from "./scenes/Checkout";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider stylesTransform={emotionTransform}>
        <MantineEmotionProvider>
          <Notifications />
          <Container fluid>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navigate to="/order" />} />
                <Route path="/order/*" element={<Checkout />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
              <RemoteLinks />
            </BrowserRouter>
          </Container>
        </MantineEmotionProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;

const RemoteLinks: FC = () => {
  return (
    <Menu>
      <Menu.Target>
        <Button sx={{ position: "absolute", right: "32px", bottom: "32px" }}>
          Other Remotes
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item component={Link} to="/cart">
          Cart
        </Menu.Item>
        <Menu.Item component={Link} to="/">
          Checkout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
