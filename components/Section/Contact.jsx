import Image from "next/image";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import useGsapFadeDown from "hooks/useGsapFadeDown";

export default function Contact() {
  const [contactTitleRef, contactImgRef, contactDetailsRef] = useGsapFadeDown();

  return (
    <section id="contact" className="section">
      <h1 className="heading-one | u-mb-2xl u-mx-auto u-center-text">
        Contact
      </h1>
      <div className="container | u-mx-auto">
        <section>
          <section
            className="article-contact__details | u-bg-white-0 u-mx-auto"
            ref={contactDetailsRef}
          >
            <div>
              <h3 className="heading-three | u-flex u-items-center">
                <FaPhone className="u-mr-xsm" /> Mobile
              </h3>
              <p>0402 830 315</p>
            </div>

            <div>
              <h3 className="heading-three | u-flex u-items-center">
                <FaGithub className="u-mr-xsm" /> Github
              </h3>
              <a href="https://github.com/gazjosef">
                https://github.com/gazjosef
              </a>
            </div>

            <div>
              <h3 className="heading-three | u-flex u-items-center">
                <FaEnvelope className="u-mr-xsm" /> Email
              </h3>
              <p>garethjhind@gmail.com</p>
            </div>

            <div>
              <h3 className="heading-three | u-flex u-items-center">
                <FaLinkedin className="u-mr-xsm" /> LinkedIn
              </h3>
              <a href="https://www.linkedin.com/in/gareth-h-a32448191/">
                https://www.linkedin.com/in/gareth-h
              </a>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}
