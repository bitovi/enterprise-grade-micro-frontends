import type { FC } from "react";

import { Suspense, lazy } from "react";
import { Button, Flex, Group, Skeleton, Tooltip } from "@mantine/core";
import { IconAlertTriangle, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const Cart = lazy(() => import("order/cart"));

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
      <ErrorBoundary fallback={<CartError />}>
        <Suspense fallback={<Skeleton width={50} height={50} radius="md" />}>
          <Cart checkoutUrl="/order" />
        </Suspense>
      </ErrorBoundary>
    </Group>
  );
};

export default Shortcuts;
