import type { FC } from "react";

import { Text, Group, Button, Title } from "@mantine/core";

import { toCurrency } from "@utilities/cart";

import Rating from "./components/Rating";
import { UseCart } from "order/cart-injector";

interface DetailsProps {
  name: string;
  rating: { count: number; rate: number };
  description: string;
  price: number;
  href: string;
  id: number;
  imgSrc: string;
  addToCart: ReturnType<UseCart>[1];
}

const Details: FC<DetailsProps> = ({ addToCart, ...props }) => {
  const { name, rating, description, price, imgSrc } = props;

  return (
    <>
      <Title order={1} fw={700}>
        {name}
      </Title>
      <Rating {...rating} />
      <Text size="md" c="dark">
        {description}
      </Text>
      <Group gap="lg">
        <Text size="xl" fw={700}>
          {toCurrency(price)}
        </Text>
        <Button
          bg="black"
          onClick={() =>
            addToCart({
              item: {
                title: name,
                image: imgSrc,
                category: "",
                ...props,
              },
            })
          }
        >
          Add to Cart
        </Button>
      </Group>
    </>
  );
};

export default Details;
