import type { FC } from "react";

import { Text, Title, Flex } from "@mantine/core";

const FilterError: FC = () => {
  return (
    <Flex
      align="center"
      sx={{ textAlign: "center" }}
      justify="center"
      direction="column"
    >
      <Title mb="md" c="red">
        Something Went Wrong!
      </Title>
      <Text>We could not load the page filters</Text>
    </Flex>
  );
};

export default FilterError;
