import type { Catalog } from "shared-types";

import { Container, Divider } from "@mantine/core";

import Categories from "./components/Categories";
import Filters from "./components/Filters";

const broadcastFilterEvent = (min: string, max: string) => {
  window.dispatchEvent(
    new CustomEvent<Catalog.FilterPriceEvent>("catalog-filter-price", {
      detail: {
        min,
        max,
      },
    })
  );
};

const Filter: Catalog.Filter = () => {
  return (
    <Container fluid px="md" w="350" py="lg">
      <Categories />
      <Divider mt="md" mb="lg" />
      <Filters onPriceChange={broadcastFilterEvent} />
    </Container>
  );
};

export default Filter;
