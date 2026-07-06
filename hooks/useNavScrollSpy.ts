"use client";

import { useEffect, useState } from "react";
import { useScrollSubscription } from "@/hooks/useScrollSubscription";

export function useNavScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState("");
  const [elements, setElements] = useState<HTMLElement[]>([]);

  useEffect(() => {
    setElements(
      sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el))
    );
  }, [sectionIds]);

  useScrollSubscription(
    ({ scrollY }) => {
      if (!elements.length) return;

      const anchor = scrollY + window.innerHeight * 0.32;
      let bestId = elements[0]?.id ?? "";
      let bestTop = -Infinity;

      for (const element of elements) {
        const top = element.offsetTop;
        if (top <= anchor && top >= bestTop) {
          bestTop = top;
          bestId = element.id;
        }
      }

      setActiveId((prev) => (prev === bestId ? prev : bestId));
    },
    { enabled: elements.length > 0 }
  );

  return activeId;
}
