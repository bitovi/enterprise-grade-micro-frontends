import type { FC } from "react";

import { Grid } from "@mantine/core";

const Shop: FC = () => {
  return (
    <Grid>
      <Grid.Col span={{ sm: 12, md: 3 }}>Filter</Grid.Col>
      <Grid.Col span={{ sm: 12, md: 9 }}>CatalogList</Grid.Col>
    </Grid>
  );
};

export default Shop;
