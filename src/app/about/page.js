"use client";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    // make progress bars fill after client-side nav
    document.querySelectorAll(".skills .progress-bar").forEach((bar) => {
      const val = bar.getAttribute("aria-valuenow") || "0";
      bar.style.width = `${val}%`;
    });
    // refresh AOS if present (template script)
    if (typeof window !== "undefined" && window.AOS) window.AOS.refresh();
  }, []);

  return (
    <main className="main about-page">
      {/* About */}
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About Me</h2>
          <p>
            Front-End Software Engineer focused on building clean, responsive,
            and accessible web apps. I enjoy turning complex requirements into
            fast, user-centered interfaces.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              {/* put your photo at /public/kelly/assets/img/profile-img.jpg */}
              <img
                src="/hero.png"
                className="img-fluid rounded"
                alt="Ahmad Bahar"
              />
            </div>

            <div className="col-lg-8 content">
              <h2>Software Engineer (Front-End)</h2>
              <p className="fst-italic py-3">
                I thrive in collaborative teams and keep sharpening my stack:
                Next.js, React, Tailwind, MUI, Ant Design, and modern tooling.
              </p>

              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Name:</strong> <span>Ahmad Bahar</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Role:</strong> <span>Front-End Engineer</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Location:</strong>{" "}
                      <span>Islamabad, Pakistan</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <a href="mailto:ahmadbahar480@gmail.com">
                        ahmadbahar480@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong>{" "}
                      <a href="tel:+923355260701">+92 335 5260701</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Links:</strong>{" "}
                      <a href="https://github.com/ahmi782" target="_blank">
                        GitHub
                      </a>{" "}
                      ·{" "}
                      <a
                        href="https://www.linkedin.com/in/ahmad-bahar-b3962324a/"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="py-3 mb-0">
                Currently interning as a Front-End Engineer at Agile Vector;
                previously at Smart Fusion. BS Software Engineering from
                COMSATS, CGPA 3.31.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  <span>Next.js</span> <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <span>React.js</span> <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <span>JavaScript</span> <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  <span>Tailwind CSS</span> <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <span>Material UI</span> <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  <span>Ant Design</span> <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
