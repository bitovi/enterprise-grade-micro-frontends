import type { FC } from "react";

import { useQuery } from "@tanstack/react-query";
import { getUserCart } from "@services/cart";

import OrderDetails from "./components/OrderDetails";
import OrderDetailsSkeleton from "./components/OrderDetailsSkeleton";
import OrderDetailsError from "./components/OrderDetailsError";

interface OrderSummaryProps {
  id?: number;
}

const OrderSummary: FC<OrderSummaryProps> = ({ id }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cart", id],
    queryFn: () => getUserCart(id),
  });

  if (isLoading) {
    return <OrderDetailsSkeleton />;
  }

  if (error || !data) {
    return <OrderDetailsError message={error?.message} />;
  }

  return <OrderDetails cart={data} />;
};

export default OrderSummary;
