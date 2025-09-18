"use client";
import { useEffect } from "react";

export default function GLightboxInit() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.GLightbox) {
      window.GLightbox({ selector: ".glightbox" });
    }
  }, []);

  return null;
}
