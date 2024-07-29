import type { FC } from "react";

import { Routes, Route } from "react-router-dom";

import Shipping from "./components/Shipping";
import Layout from "./components/Layout";
import Payment from "./components/Payment";
import { useCheckout } from "./hooks/useCheckout";

const Checkout: FC = () => {
  const { checkout, navigateToCheckout } = useCheckout();

  return <div>Implement the routes for the checkout flow here</div>;
};

export default Checkout;
