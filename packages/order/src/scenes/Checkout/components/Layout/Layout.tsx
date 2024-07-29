import type { FC } from "react";

import { Grid } from "@mantine/core";

import OrderSummary from "./components/OrderSummary";

const Layout: FC<{ id?: number }> = ({ id }) => {
  return (
    <Grid align="center">
      <Grid.Col span={{ md: 12, lg: 6 }}>
        <OrderSummary id={id} />
      </Grid.Col>
      <Grid.Col span={{ md: 12, lg: 6 }}>
        <div>Placeholder</div>
      </Grid.Col>
    </Grid>
  );
};

export default Layout;
