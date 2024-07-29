import type { FC } from "react";

import { Routes, Route } from "react-router-dom";

import Shipping from "./components/Shipping";
import Layout from "./components/Layout";
import Payment from "./components/Payment";
import { useCheckout } from "./hooks/useCheckout";

const Checkout: FC = () => {
  const { checkout, navigateToCheckout } = useCheckout();

  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route index element={<Shipping onSubmit={navigateToCheckout} />} />
        <Route path="checkout" element={<Payment onSubmit={checkout} />} />
      </Route>
    </Routes>
  );
};

export default Checkout;
