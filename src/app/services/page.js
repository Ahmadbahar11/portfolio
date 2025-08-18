"use client";

export default function ServicesPage() {
  return (
    <main className="main">
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            I provide professional website development services using modern
            frontend technologies and popular React styling frameworks for
            responsive and user-friendly designs.
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {/* Service 1 */}

            {/* Service 2 */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service-item item-orange position-relative">
                <div className="icon">
                  <i className="bi bi-braces"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>React + Styling Frameworks</h3>
                </a>
                <p>
                  I will develop modern React-based websites styled with the
                  latest UI frameworks for responsiveness and rich design.
                </p>
                <div className="mt-2">
                  <span className="badge bg-info me-1">Bootstrap + React</span>
                  <span className="badge bg-success me-1">
                    Tailwind + React
                  </span>
                  <span className="badge bg-dark me-1">MUI + React</span>
                  <span className="badge bg-primary">Ant Design + React</span>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-item item-teal position-relative">
                <div className="icon">
                  <i className="bi bi-laptop"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Custom Website Solutions</h3>
                </a>
                <p>
                  I will deliver tailored website solutions according to your
                  requirements using Next.js and React with full SEO support.
                </p>
                <div className="mt-2">
                  <span className="badge bg-dark me-1">Next.js</span>
                  <span className="badge bg-success me-1">React</span>
                  <span className="badge bg-info">SEO</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item item-cyan position-relative">
                <div className="icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Web Development (HTML, CSS, JS)</h3>
                </a>
                <p>
                  I will build responsive websites using HTML5, CSS3, and
                  JavaScript with clean and optimized code for speed and SEO.
                </p>
                <div className="mt-2">
                  <span className="badge bg-primary me-1">HTML5</span>
                  <span className="badge bg-secondary me-1">CSS3</span>
                  <span className="badge bg-success">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
