import Link from "next/link";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";

const Home = () => {
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
            <a href="#projects">Projects</a>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
      <section id="intro">
        <p className="name">
          Hi, my name is <span>Venkat Kotu.</span>
        </p>

        <h2>Passionate JavaScript Developer</h2>
        <p>
          I am a Member of Technical Staff at{" "}
          <a href="https://paypal.com/mep">PayPal</a>, where I lead a team of
          engineers who specialize in advanced technologies such as JavaScript,
          ReactJS, Next.js, Node.js, and GraphQL to enhance merchant products. I
          mentor my team, drive the technical direction of the project, and
          collaborate with cross-functional teams to deliver high-quality,
          cutting-edge solutions that align with company goals and meet merchant
          needs.
        </p>
      </section>
      <div className="gradient"></div>
      <div className="section-blue">
        <Projects />
      </div>
      <div className="gradient"></div>
      <Contact />
      <div className="gradient"></div>
      <Footer />
    </div>
  );
};

export default Home;
