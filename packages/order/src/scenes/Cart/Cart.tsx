import type { FC } from "react";

import { Button, Flex, HoverCard, Text } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";

import { toCurrency } from "@utilities/currency";
import CartSummary from "@components/CartSummary";

import { useCart } from "./hook/useCart";
import { Link } from "react-router-dom";

const Cart: FC = () => {
  const cart = useCart();
  const cartHasItems = cart.products.length !== 0;

  return (
    <HoverCard>
      <HoverCard.Target>
        <Flex c="white">
          <IconShoppingCart color="white" />
          {cartHasItems ? toCurrency(cart.subTotal) : null}
        </Flex>
      </HoverCard.Target>
      <HoverCard.Dropdown c="black">
        {cartHasItems ? (
          <>
            <CartSummary products={cart.products} />
            <Button component={Link} to="/order">
              Checkout
            </Button>
          </>
        ) : (
          <Text>No items in cart</Text>
        )}
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

export default Cart;
