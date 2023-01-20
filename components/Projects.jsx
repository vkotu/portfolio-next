import Image from "next/image";
const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects I&apos;m proud of</h2>
      <article>
        <div className="text">
          <h4>PayPal&apos;s Project</h4>
          <h3>Merchant Funds Management</h3>
          <p className="blackbox">
            I recently led a complete redesign of the merchant&apos;s money
            dashboard and money transfer experiences at PayPal. The previous
            version was built using outdated libraries and practices, but my
            team and I were able to rebuild it from scratch. The new dashboard
            is now available to business users and boasts an impressive 2
            million active users per month who are able to perform various
            actions with ease and efficiency. You can see the experience for
            yourself by signing up for a{" "}
            <a href="https://www.paypal.com/us/webapps/mpp/account-selection">
              business
            </a>{" "}
            account and accessing the money{" "}
            <a href="https://www.paypal.com/businesswallet/money">dashboard</a>{" "}
            page.
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Graphql</li>
            <li>Webpack</li>
          </ul>
        </div>
        <Image
          width={500}
          height={450}
          src="/5.png"
          alt="Screenshot of the paypal merchant money dashboard."
        />
      </article>
      <article className="reverse">
        <div className="text">
          <h4>PayPal&apos;s Project</h4>
          <h3>Merchant&apos;s Home Page</h3>
          <p className="blackbox">
            I have led the development of micro front-end components that are
            hosted on an internal micro front-end framework at PayPal. This
            allows for increased flexibility as each component on the page can
            be built using a variety of different technology stacks. The result
            is a highly modular and efficient system that can be easily
            maintained and updated. You can see the experience for yourself by
            signing up for a{" "}
            <a href="https://www.paypal.com/us/webapps/mpp/account-selection">
              business
            </a>{" "}
            account and accessing the{" "}
            <a href="https://www.paypal.com/mep/dashboard">page</a>. on PayPal.
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Graphql</li>
            <li>Webpack</li>
          </ul>
        </div>
        <Image
          width={500}
          height={450}
          src="/1.png"
          alt="Screen shot of paypal merchant home page."
        />
      </article>
      <article>
        <div className="text">
          <h4>PayPal&apos;s Project</h4>
          <h3>Merchant&apos;s Tenancy Level Experience</h3>
          <p className="blackbox">
            I have been involved in a project at PayPal that aims to address the
            pain points of large merchants such as eBay and Amazon. This
            project, known as the &quot;unified experience,&quot; was designed
            to improve the overall user experience for these merchants. My role
            in this project includes architecting, designing, and
            co-implementing the solution by working closely with
            cross-functional teams throughout PayPal. Through collaboration and
            teamwork, we have been able to achieve our goal of creating a
            seamless and efficient experience for large merchants using PayPal.
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Graphql</li>
            <li>Webpack</li>
          </ul>
        </div>
        <Image
          width={400}
          height={400}
          src="/3.png"
          alt="Screenshot of the Wall of Wonder Collections."
        />
      </article>
      <article className="reverse">
        <div className="text">
          <h4>Personal learning project</h4>
          <h3>Music app like a spotify</h3>
          <p className="blackbox">
            I participated in a workshop where we developed a project utilizing
            the Next.js framework. This workshop provided me with a valuable
            opportunity to gain hands-on experience with the Next.js framework
            and learn about building secure applications. I gained a great deal
            of knowledge and skills from working on this project, which I will
            be able to apply to my future endeavors.
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>HTML</li>
            <li>Next.js</li>
            <li>ReactJS</li>
            <li>ChakraUI</li>
            <li>Parcel</li>
          </ul>
        </div>
        <Image
          width={500}
          height={550}
          src="/music.png"
          alt="Screenshot of the Wall of Wonder Collections."
        />
      </article>
      <article>
        <div className="text">
          <h4>Master&apos;s Course Project</h4>
          <h3>Smart Plate!</h3>
          <p className="blackbox">
            Project is about providing the nutritional facts for a food product
            through RFID scanning. . You can watch the working demo in my
            youtube channel{" "}
            <a href="https://www.youtube.com/watch?v=a3w_cn20VNg">click</a>
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Jquery</li>
            <li>Node.js</li>
            <li>Socket.io</li>
            <li>MySQL</li>
          </ul>
        </div>
        <Image
          width={500}
          height={400}
          src="/6.png"
          alt="Screen shot of smart plate project."
        />
      </article>
    </section>
  );
};

export default Projects;
