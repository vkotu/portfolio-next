import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <h1>
              <Link href="/">
                <span className="fa-solid fa-code" area-hidden="true"></span>
                <span>Venkat Kotu</span>
              </Link>
            </h1>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/venkatasaireddy/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="fa-brands fa-linkedin" aria-hidden="true"></span>{" "}
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/vkotu" target="_blank" rel="noreferrer">
              <span className="fa-brands fa-github" aria-hidden="true"></span>
              <span className="sr-only">Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/17ZtCNdYFylCuAvIPpiaqB4_4fdfhW5el/view?usp=sharing"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="gradient"></div>
      <div className="section-blue">
        <section id="projects">
          <h2>Uh Oh!</h2>
          <article>
            <Image src="/error.png" alt="Page not found!" />
          </article>
        </section>
      </div>
      <div className="gradient"></div>
      <Footer />
    </div>
  );
};

export default About;
