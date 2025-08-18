"use client";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function HomePage() {
  return (
    <section className="hero-section position-relative overflow-hidden">
      {/* Decorative background */}
      <div className="hero-deco hero-deco-1" />
      <div className="hero-deco hero-deco-2" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container position-relative">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <div className="eyebrow">ENGINEERING DIGITAL EXPERIENCES</div>

            <h3 className="display-hero">
              I’m Ahmad Bahar
              <br />
            </h3>
            <h4>
              <span style={{ color: "#black", fontWeight: "bold" }}>
                <Typewriter
                  words={[
                    "A Frontend Engineer",
                    "A Problem Solver",
                    "A React Enthusiast",
                    "A UI/UX Craftsman",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </h4>
            <br />

            <p className="lead-hero mb-4">
              I design and develop modern, responsive, and scalable interfaces
              using React.js & Next.js. My toolkit includes Tailwind CSS,
              Bootstrap 5, Material-UI (MUI), and Ant Design for clean UI.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="btn btn-accent btn-lg btn-pill px-4"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline-secondary btn-lg btn-pill px-4 btn-ghost"
              >
                Hire Me
              </Link>
            </div>

            {/* Tech chips */}
            <ul className="hero-chips mt-4">
              {[
                "Next.js",
                "React.js",
                "Tailwind CSS",
                "Bootstrap 5",
                "Material UI (MUI)",
                "Ant Design",
                "Redux Toolkit",
                "Axios / REST APIs",
                "Git & GitHub",
              ].map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-5 text-center">
            <img
              src="/hero.png"
              alt="Ahmad Bahar"
              className="img-fluid rounded-4 hero-photo shadow-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
