import type { FC, ReactNode } from "react";

import { Container, Divider } from "@mantine/core";

import Categories from "./components/Categories";
import Filters from "./components/Filters/Filters";

/// Leave separate - these are temporary
import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
///

const Filter: FC = () => {
  return (
    <TempWrapper>
      <Container fluid px="md" w="350" py="lg">
        <Categories />
        <Divider mt="md" mb="lg" />
        <Filters onPriceChange={() => {}} />
      </Container>
    </TempWrapper>
  );
};

export default Filter;

const TempWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>{children}</MantineEmotionProvider>
    </MantineProvider>
  );
};
