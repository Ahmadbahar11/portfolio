import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="main">
      <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>
            A selection of projects I’ve worked on, including admin dashboards,
            corporate websites, and e-commerce platforms.
          </p>
        </div>

        <div className="container">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <ul
              className="portfolio-filters isotope-filters"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-admin">Admin Panels</li>
              <li data-filter=".filter-company">Company Websites</li>
              <li data-filter=".filter-store">E-Commerce Stores</li>
            </ul>

            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Admin Panel */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-admin">
                <img
                  src="assets/img/admin-panel.jpg"
                  className="img-fluid"
                  alt="Admin Panel"
                />
                <div className="portfolio-info">
                  <h4>Admin Dashboard</h4>
                  <p>React + MUI based interactive dashboards</p>
                  <a
                    href="assets/img/admin-panel.jpg"
                    title="Admin Dashboard"
                    data-gallery="portfolio-gallery-admin"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    href="/portfolio-details"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>

              {/* Company Website */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-company">
                <img
                  src="assets/img/company-webistes.jpg"
                  className="img-fluid"
                  alt="Company Website"
                />
                <div className="portfolio-info">
                  <h4>Company Website</h4>
                  <p>Modern responsive business site</p>
                  <a
                    href="assets/img/profile-img.jpg"
                    title="Company Website"
                    data-gallery="portfolio-gallery-company"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    href="/portfolio-details"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>

              {/* Store 1 */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-store">
                <img
                  src="assets/img/store-1.jpg"
                  className="img-fluid"
                  alt="E-Commerce Store 1"
                />
                <div className="portfolio-info">
                  <h4>E-Commerce Store</h4>
                  <p>Full-featured store with cart & checkout</p>
                  <a
                    href="assets/img/store-1.jpg"
                    title="E-Commerce Store"
                    data-gallery="portfolio-gallery-store"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    href="/portfolio-details"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>

              {/* Store 2 */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-store">
                <img
                  src="assets/img/store-2.jpg"
                  className="img-fluid"
                  alt="E-Commerce Store 2"
                />
                <div className="portfolio-info">
                  <h4>E-Commerce Store</h4>
                  <p>Next.js + Tailwind powered shop</p>
                  <a
                    href="assets/img/store-2.jpg"
                    title="E-Commerce Store"
                    data-gallery="portfolio-gallery-store"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    href="/portfolio-details"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
        </div>
      </section>
    </main>
  );
}
