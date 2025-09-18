"use client";

import { useEffect } from "react";

export default function PortfolioIsotope() {
  useEffect(() => {
    let iso;

    // Run only in browser
    if (typeof window !== "undefined") {
      // Dynamically import imagesLoaded and isotope-layout
      Promise.all([
        import("imagesloaded"),
        import("isotope-layout")
      ]).then(([imagesLoaded, Isotope]) => {
        const grid = document.querySelector(".isotope-container");
        if (!grid) return;
        imagesLoaded.default(grid, function () {
          iso = new Isotope.default(grid, {
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
      });
    }

    // Cleanup
    return () => {
      if (iso) iso.destroy();
    };
  }, []);

  return null;
}
