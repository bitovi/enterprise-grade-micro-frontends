import type { FC } from "react";

import { Box } from "@mantine/core";

interface ErrorProps {
  mfe: "header" | "footer";
}

const Error: FC<ErrorProps> = ({ mfe }) => {
  return (
    <Box p="lg" bg="dark" c="red" ta="center">
      Sorry we couldn't load the {mfe}
    </Box>
  );
};

export default Error;
