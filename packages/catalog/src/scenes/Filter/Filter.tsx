import type { Catalog } from "shared-types";

import { Container, Divider } from "@mantine/core";

import Categories from "./components/Categories";
import Filters from "./components/Filters/Filters";

const Filter: Catalog.Filter = () => {
  return (
    <Container fluid px="md" w="350" py="lg">
      <Categories />
      <Divider mt="md" mb="lg" />
      <Filters onPriceChange={() => {}} />
    </Container>
  );
};

export default Filter;
