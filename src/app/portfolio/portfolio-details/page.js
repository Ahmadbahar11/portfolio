"use client";
import { useEffect } from "react";

export default function ProjectDetailsPage() {
  // Ensure Swiper initializes after client-side route changes
  useEffect(() => {
    if (typeof window === "undefined" || !window.Swiper) return;

    document
      .querySelectorAll(".portfolio-details-slider.init-swiper")
      .forEach((el) => {
        if (el.dataset.swiperInited) return; // prevent double init

        const cfgTag = el.querySelector(".swiper-config");
        let config = {
          loop: true,
          speed: 600,
          autoplay: { delay: 5000 },
          slidesPerView: "auto",
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          },
        };
        try {
          if (cfgTag?.textContent) config = JSON.parse(cfgTag.textContent);
        } catch (_) {}

        // eslint-disable-next-line no-new
        new window.Swiper(el, config);
        el.dataset.swiperInited = "true";
      });
  }, []);

  return (
    <main className="main">
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio Details</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Slider */}
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper init-swiper">
                {/* Config block read by the init code above */}
                <script type="application/json" className="swiper-config">{`
                  {
                    "loop": true,
                    "speed": 600,
                    "autoplay": { "delay": 5000 },
                    "slidesPerView": "auto",
                    "pagination": { "el": ".swiper-pagination", "type": "bullets", "clickable": true }
                  }
                `}</script>

                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img src="   assets/img/portfolio/app-1.jpg" alt="App 1" />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="   assets/img/portfolio/product-1.jpg"
                      alt="Product 1"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="   assets/img/portfolio/branding-1.jpg"
                      alt="Branding 1"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="   assets/img/portfolio/books-1.jpg"
                      alt="Books 1"
                    />
                  </div>
                </div>

                <div className="swiper-pagination"></div>
              </div>
            </div>

            {/* Sidebar info */}
            <div className="col-lg-4">
              <div
                className="portfolio-info"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Web design
                  </li>
                  <li>
                    <strong>Client</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="#">www.example.com</a>
                  </li>
                </ul>
              </div>

              <div
                className="portfolio-description"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2>Exercitationem repudiandae officiis neque suscipit</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum
                  deserunt eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
