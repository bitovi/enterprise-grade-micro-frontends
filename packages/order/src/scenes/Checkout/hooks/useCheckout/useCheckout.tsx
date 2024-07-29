import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { rem } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import type { UserCart } from "@services/cart";
import { cartKey, newCart } from "@services/cart";
import { useLocalStorage } from "@mantine/hooks";

export const useCheckout = () => {
  const [, setCart] = useLocalStorage<UserCart>({ key: cartKey });
  const navigate = useNavigate();

  const checkout = () => {
    setCart(newCart);

    notifications.show({
      title: "Purchase Complete",
      message: `Your items are on the way!`,
      icon: <IconCheck style={{ width: rem(20), height: rem(20) }} />,
    });

    navigate("/shop");
  };

  const navigateToCheckout = () => {
    navigate("checkout");
  };

  return {
    checkout,
    navigateToCheckout,
  };
};
