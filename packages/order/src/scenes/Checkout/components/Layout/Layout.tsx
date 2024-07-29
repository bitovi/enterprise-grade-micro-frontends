import type { FC } from "react";

import { Grid } from "@mantine/core";

import OrderSummary from "./components/OrderSummary";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <Grid align="center">
      <Grid.Col span={{ md: 12, lg: 6 }}>
        <OrderSummary />
      </Grid.Col>
      <Grid.Col span={{ md: 12, lg: 6 }}>
        <Outlet />
      </Grid.Col>
    </Grid>
  );
};

export default Layout;
