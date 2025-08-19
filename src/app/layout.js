import Link from "next/link";
import "./globals.css";
import Script from "next/script";
import { Roboto, Poppins, Raleway } from "next/font/google";
import AOSInit from "./components/AOSInit"; // 👈 you'll add this

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Ahmad Bahar — Portfolio",
  description: "React/Next.js developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />

        {/* Vendor CSS */}
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="/assets/vendor/aos/aos.css" />
        <link
          rel="stylesheet"
          href="/assets/vendor/swiper/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/glightbox/css/glightbox.min.css"
        />

        {/* Main CSS */}
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>

      <body
        className={`index-page ${roboto.className} ${poppins.className} ${raleway.className}`}
      >
        {/* Init AOS only on client */}
        <AOSInit />

        {/* Header */}
        <header
          id="header"
          className="header d-flex align-items-center light-background sticky-top"
        >
          <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
            <Link
              href="/"
              className="logo d-flex align-items-center me-auto me-xl-0"
            >
              <h1 className="sitename">Portfolio</h1>
            </Link>

            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <Link href="/" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/resume">Resume</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <div className="header-social-links">
              <a href="#" className="twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer id="footer" className="footer light-background">
          <div className="container">
            <div className="copyright text-center">
              <p>
                © <span>Copyright</span>{" "}
                <strong className="px-1 sitename">Portfolio</strong>{" "}
                <span>All Rights Reserved</span>
              </p>
            </div>
            <div className="social-links d-flex justify-content-center">
              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </footer>

        {/* Scroll Top */}
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>

        {/* Vendor JS (loaded via Next.js Script) */}
        <Script
          src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/php-email-form/validate.js"
          strategy="lazyOnload"
        />
        <Script src="/assets/vendor/aos/aos.js" strategy="lazyOnload" />
        <Script
          src="/assets/vendor/waypoints/noframework.waypoints.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/purecounter/purecounter_vanilla.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/swiper/swiper-bundle.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/glightbox/js/glightbox.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"
          strategy="lazyOnload"
        />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
