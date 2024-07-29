import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import * as Sentry from "@sentry/react";

import Layout from "./components/Layout";

import Shop from "./scenes/Shop";
import About from "./scenes/About";
import Contact from "./scenes/Contact";
import Account from "./scenes/Account";
import Item from "./scenes/Item";
import Login from "./scenes/Login";
import Checkout from "./scenes/Checkout";

const queryClient = new QueryClient();

const App = () => {
  return (
    <Sentry.ErrorBoundary fallback={<div>An error has occurred</div>}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider stylesTransform={emotionTransform}>
          <MantineEmotionProvider>
            <Notifications />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navigate to="/shop" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/shop" element={<Layout />}>
                  <Route index element={<Shop />} />
                  <Route path=":category" element={<Shop />} />
                  <Route path="item/:productId" element={<Item />} />
                </Route>
                <Route path="/about" element={<Layout />}>
                  <Route index element={<About />} />
                </Route>
                <Route path="/contact" element={<Layout />}>
                  <Route index element={<Contact />} />
                </Route>
                <Route path="/account" element={<Layout />}>
                  <Route index element={<Account />} />
                </Route>
                <Route path="/order" element={<Layout />}>
                  <Route index path="*" element={<Checkout />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </MantineEmotionProvider>
        </MantineProvider>
      </QueryClientProvider>
    </Sentry.ErrorBoundary>
  );
};

export default App;
