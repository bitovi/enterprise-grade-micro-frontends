import type { FC } from "react";

import { Container, Divider } from "@mantine/core";

import Categories from "./components/Categories";
import Filters from "./components/Filters/Filters";

function broadcastPriceChange(min: string, max: string) {
  document.dispatchEvent(
    new CustomEvent("catalog-filter-price", {
      detail: {
        min,
        max,
      },
    })
  );
}

const Filter: FC = () => {
  return (
    <Container fluid px="md" w="350" py="lg">
      <Categories />
      <Divider mt="md" mb="lg" />
      <Filters onPriceChange={broadcastPriceChange} />
    </Container>
  );
};

export default Filter;