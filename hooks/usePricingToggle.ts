"use client";

import { useState } from "react";

export function usePricingToggle() {
  const [isYearly, setIsYearly] = useState(false);

  const toggle = () => setIsYearly((prev) => !prev);

  return { isYearly, toggle, setIsYearly };
}
