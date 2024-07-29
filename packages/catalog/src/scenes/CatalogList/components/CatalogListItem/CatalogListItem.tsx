import type { FC } from "react";

import { Card, Image, Text, Stack, Button, Tooltip } from "@mantine/core";
import { Link } from "react-router-dom";

import { addToCart, toCurrency } from "@utilities/cart";

export interface CatalogListItemProps {
  href: string;
  imgSrc: string;
  name: string;
  price: number;
  id: number;
  description: string;
}

const CatalogListItem: FC<CatalogListItemProps> = (props) => {
  const { href, imgSrc, name, price } = props;

  return (
    <Card shadow="sm" p={0} h={350} w={225}>
      <Stack gap="sm">
        <Link to={href}>
          <Image
            src={imgSrc}
            alt={name}
            height={200}
            width={250}
            fit="scale-down"
          />
        </Link>
        <Stack gap="sm" px="md">
          <Tooltip label={name}>
            <Text
              size="lg"
              fw={700}
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </Text>
          </Tooltip>
          <Text size="lg" c="dark">
            {toCurrency(price)}
          </Text>
          <Button bg="black" onClick={() => addToCart(props)}>
            <Text size="md" fw={700}>
              Add to cart
            </Text>
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CatalogListItem;
