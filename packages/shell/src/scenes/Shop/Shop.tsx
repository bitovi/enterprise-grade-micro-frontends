import type { FC } from "react";

import { lazy, Suspense } from "react";
import { Grid } from "@mantine/core";

const Filter = lazy(() => import("catalog/filter"));
const CatalogList = lazy(() => import("catalog/list"));

const Shop: FC = () => {
  return (
    <Grid>
      <Grid.Col span={{ sm: 12, md: 3 }}>
        <Suspense>
          <Filter />
        </Suspense>
      </Grid.Col>
      <Grid.Col span={{ sm: 12, md: 9 }}>
        <Suspense>
          <CatalogList />
        </Suspense>
      </Grid.Col>
    </Grid>
  );
};

export default Shop;
