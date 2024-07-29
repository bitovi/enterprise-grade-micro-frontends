import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { rem } from "@mantine/core";

export const useCheckout = () => {
  const checkout = () => {
    notifications.show({
      title: "Purchase Complete",
      message: `Your items are on the way!`,
      icon: <IconCheck style={{ width: rem(20), height: rem(20) }} />,
    });

    // Implement return to shop logic below
  };

  const navigateToCheckout = () => {
    // Implement to checkout logic below
  };

  return {
    checkout,
    navigateToCheckout,
  };
};
