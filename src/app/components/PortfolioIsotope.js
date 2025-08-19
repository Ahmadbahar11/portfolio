"use client";

import { useEffect } from "react";
import Isotope from "isotope-layout";

export default function PortfolioIsotope() {
  useEffect(() => {
    // init Isotope
    let iso = new Isotope(".isotope-container", {
      itemSelector: ".isotope-item",
      layoutMode: "masonry",
    });

    // filter buttons
    let filterButtons = document.querySelectorAll(".portfolio-filters li");

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        filterButtons.forEach((el) => el.classList.remove("filter-active"));
        this.classList.add("filter-active");

        let filterValue = this.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });
      });
    });

    return () => iso.destroy(); // cleanup
  }, []);

  return null;
}
