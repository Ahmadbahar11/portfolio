"use client";

export default function ResumePage() {
  return (
    <main className="main">
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>
            Front-End Software Engineer passionate about building fast,
            responsive, and user-centric web applications. Experienced in
            React.js, Next.js, Tailwind, MUI, and Ant Design.
          </p>
        </div>

        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Ahmad Bahar</h4>
                <p>
                  <em>
                    Software Engineer focused on Front-End Development. Skilled
                    at transforming requirements into clean, responsive
                    interfaces. Strong collaborator with internship experience
                    across Agile teams.
                  </em>
                </p>
                <ul>
                  <li>Islamabad, Pakistan</li>
                  <li>
                    <a href="tel:+923355260701">+92 335 5260701</a>
                  </li>
                  <li>
                    <a href="mailto:ahmadbahar480@gmail.com">
                      ahmadbahar480@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>BS Software Engineering</h4>
                <h5>2021 – 2025</h5>
                <p>
                  <em>COMSATS University Islamabad</em>
                </p>
                <p>CGPA: 3.31</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>

              <div className="resume-item">
                <h4>Front-End Engineering Intern</h4>
                <h5>Jun 2024 – Present</h5>
                <p>
                  <em>Agile Vector, Islamabad</em>
                </p>
                <ul>
                  <li>
                    Developed responsive UI components with Next.js, React.js,
                    and Tailwind CSS.
                  </li>
                  <li>
                    Implemented design systems with Material UI and Ant Design
                    for consistency and scalability.
                  </li>
                  <li>
                    Collaborated in Agile sprints, working closely with senior
                    engineers on real-world projects.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Front-End Intern</h4>
                <h5>Aug 2023 – Oct 2023</h5>
                <p>
                  <em>Smart Fusion, Islamabad</em>
                </p>
                <ul>
                  <li>
                    Assisted in building and maintaining interactive web
                    dashboards using React.js.
                  </li>
                  <li>
                    Gained experience in state management, component reuse, and
                    Git-based workflows.
                  </li>
                  <li>
                    Enhanced application responsiveness across devices through
                    CSS optimization.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
