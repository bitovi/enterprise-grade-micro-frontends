import type { FC } from "react";

import { Button, Flex, Group, Tooltip } from "@mantine/core";
import { IconAlertTriangle, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Shortcuts: FC = () => {
  return (
    <Group>
      <Button
        component={Link}
        to="/account"
        c="white"
        bg="dark"
        sx={{ padding: 0, aspectRatio: 1, borderRadius: "50%" }}
      >
        <IconUser />
      </Button>
      {/* Cart goes here */}
    </Group>
  );
};

export default Shortcuts;

const CartError: FC = () => {
  return (
    <Flex justify="center" align="center">
      <Tooltip label="Our cart is having some issues">
        <IconAlertTriangle color="yellow" size={18} width={30} height={30} />
      </Tooltip>
    </Flex>
  );
};
