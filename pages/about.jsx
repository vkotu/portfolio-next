import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

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
            <Link href="/#projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
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
          <h2>About Me!</h2>
          <article>
            <div className="text">
              <h3>Hi! I&apos;m Venkat Kotu</h3>
              <p className="blackbox">
                <p>
                  I am a JavaScript developer with experience in building
                  efficient and optimized solutions. My primary focus is on
                  ensuring security, performance, and accessibility in all of my
                  projects. I have gained valuable experience working for
                  notable companies such as PayPal, Yahoo, and Broadcom, where I
                  have created a wide range of products, from small components
                  to large-scale systems, with a strong emphasis on creating
                  fast and user-friendly experiences.{" "}
                </p>
                <p>
                  I am a strong believer in constant learning and stay
                  up-to-date with the latest technologies in order to bring new
                  and innovative solutions to the team. I have a passion for
                  improving both the application and developer efficiency. I am
                  confident that my skills and experience make me a valuable
                  asset to any organization looking to build high-quality,
                  secure and efficient web applications.
                </p>
                <p>
                  Currently, I am a member of the technical staff at PayPal,
                  where I work as an accessibility advocate and help create
                  inclusive experiences that adhere to web standards for
                  millions of merchants worldwide. Before my current role, I was
                  a Full Stack Software Engineer III at Yahoo, where I worked on
                  the user interface for Yahoo&apos;s advertising platform,
                  managing campaigns and reporting.
                </p>
              </p>
              <h4>Hobbies</h4>
              <ul>
                <li>Solving Problems</li>
                <li>Learn new things</li>
                <li>Board games</li>
                <li>Skiing</li>
              </ul>
            </div>
            <Image
              width={500}
              height={650}
              src="/aboutMe.png"
              alt="Screenshot of profile pic."
            />
          </article>
        </section>
      </div>
      <div className="gradient"></div>
      <Footer />
    </div>
  );
};

export default About;
