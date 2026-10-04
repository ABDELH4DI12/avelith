"use client";

import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    let cancelled = false;
    let cleanup;

    import("../../lib/animations").then(({ initializeSite }) => {
      if (!cancelled) cleanup = initializeSite();
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return null;
}
