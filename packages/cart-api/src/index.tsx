import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState(0);

  return [cart, setCart] as const;
};
