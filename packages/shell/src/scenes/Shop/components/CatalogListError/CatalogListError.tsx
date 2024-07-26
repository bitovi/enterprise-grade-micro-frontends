import type { FC } from "react";

import { Text, Title, Flex } from "@mantine/core";

const CatalogListError: FC = () => {
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
      <Text>We could not load the catalog</Text>
    </Flex>
  );
};

export default CatalogListError;
