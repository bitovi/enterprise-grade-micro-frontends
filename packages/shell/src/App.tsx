import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import * as Sentry from "@sentry/react";

import Layout from "./components/Layout";

import Shop from "./scenes/Shop";

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
                <Route path="/shop" element={<Layout />}>
                  <Route index element={<Shop />} />
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
