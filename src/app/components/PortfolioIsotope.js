"use client";

import { useEffect } from "react";

export default function PortfolioIsotope() {
  useEffect(() => {
    let iso;

    // Run only in browser
    if (typeof window !== "undefined") {
      import("isotope-layout").then((Isotope) => {
        iso = new Isotope.default(".isotope-container", {
          itemSelector: ".isotope-item",
          layoutMode: "masonry",
        });

        // filter buttons
        const filterButtons = document.querySelectorAll(
          ".portfolio-filters li"
        );

        filterButtons.forEach((btn) => {
          btn.addEventListener("click", function () {
            filterButtons.forEach((el) => el.classList.remove("filter-active"));
            this.classList.add("filter-active");

            const filterValue = this.getAttribute("data-filter");
            iso.arrange({ filter: filterValue });
          });
        });
      });
    }

    // Cleanup
    return () => {
      if (iso) iso.destroy();
    };
  }, []);

  return null;
}
