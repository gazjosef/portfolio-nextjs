import { FaGithub, FaLinkedin } from "react-icons/fa";
// import useGsapFadeDown from "../../../hooks/useGsapFadeDown";
import useGsapFadeDown from "../../../hooks/useGsapFadeDown";

export default function Contact() {
  const [contactTitleRef, contactDetailsRef] = useGsapFadeDown();

  return (
    <section id="contact" className="section--contact">
      <h1
        className="heading-one | u-mb-2xl u-mx-auto u-center-text"
        ref={contactTitleRef as React.LegacyRef<HTMLHeadingElement>}
      >
        Contact
      </h1>
      <div className="container">
        <section
          className="article-contact__details"
          ref={contactDetailsRef as React.RefObject<HTMLElement>}
        >
          <div>
            <a
              href="https://github.com/gazjosef"
              className=" u-flex u-flex-col u-items-center u-justify-center u-gap-1"
            >
              <FaGithub size="10rem" color="#145da0" />
              <h3 className="heading-three">Github</h3>
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/gareth-h-a32448191/"
              className=" u-flex u-flex-col u-items-center u-justify-center u-gap-1"
            >
              <FaLinkedin size="10rem" color="#145da0" />
              <h3 className="heading-three">LinkedIn</h3>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
