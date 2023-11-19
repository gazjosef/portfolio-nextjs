import Image from "next/image";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import useGsapFadeDown from "hooks/useGsapFadeDown";

export default function Contact() {
  const [contactTitleRef, contactImgRef, contactDetailsRef] = useGsapFadeDown();

  return (
    <section id="contact" className="section">
      <div className="container | u-mx-auto u-grid u-even-columns">
        <section className="article-contact__image" ref={contactImgRef}>
          <Image
            src="/images/section/undraw_designer_re_5v95.svg"
            alt="responsive"
            width={960}
            height={572}
          />
        </section>

        <section>
          <section
            className="article-contact__details | u-bg-white-0 u-mx-auto"
            ref={contactDetailsRef}
          >
            <h1 className="heading-one | u-margin-bottom-small">Contact</h1>
            <div>
              <h3 className="heading-three | u-flex u-items-center">
                <FaPhone className="u-mr-xsm" /> Mobile
              </h3>
              <p className="paragraph">0402 830 315</p>
            </div>

            <div>
              <h3 className="heading-three | u-flex u-items-center">
                <FaEnvelope className="u-mr-xsm" /> Email
              </h3>
              <p className="paragraph">garethjhind@gmail.com</p>
            </div>

            <div>
              <h3 className="heading-three | u-flex u-items-center">
                <FaGithub className="u-mr-xsm" /> Github
              </h3>
              <p className="paragraph">
                <a href="https://github.com/gazjosef">
                  https://github.com/gazjosef
                </a>
              </p>
            </div>

            <div>
              <h3 className="heading-three | u-flex u-items-center">
                <FaLinkedin className="u-mr-xsm" /> LinkedIn
              </h3>
              <p className="paragraph">
                <a href="https://www.linkedin.com/in/gareth-h-a32448191/">
                  https://www.linkedin.com/in/gareth-h/
                </a>
              </p>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}
