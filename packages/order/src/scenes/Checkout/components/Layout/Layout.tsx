import type { FC } from "react";

import { Grid } from "@mantine/core";

import OrderSummary from "./components/OrderSummary";

const Layout: FC = () => {
  return (
    <Grid align="center">
      <Grid.Col span={{ md: 12, lg: 6 }}>
        <OrderSummary />
      </Grid.Col>
      <Grid.Col span={{ md: 12, lg: 6 }}>
        <div>Placeholder</div>
      </Grid.Col>
    </Grid>
  );
};

export default Layout;
