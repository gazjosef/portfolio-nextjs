import { useRef, useEffect } from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { gsapFadeIn } from "@/components/Animation";

export default function Contact() {
  const contactImgRef = useRef(null);
  const contactDetailsRef = useRef(null);

  useEffect(() => {
    gsapFadeIn(contactImgRef, 0.5);
    gsapFadeIn(contactDetailsRef, 0.25);
  }, []);

  return (
    <article id="contact" className="article-contact">
      {/* <section className="article-contact__title"></section> */}

      <section className="article-contact__image" ref={contactImgRef}>
        <Image
          src="/images/section/undraw_designer_re_5v95.svg"
          alt="responsive"
          width={800}
          height={560}
        />
      </section>

      <section>
        <section className="article-contact__details" ref={contactDetailsRef}>
          <h1 className="heading-one">Contact</h1>
          <div className="article-contact__details--phone">
            <h3 className="heading-three align-items">
              <FaPhone className="align-items__icon" /> Mobile
            </h3>
            <p className="paragraph">0402 830 315</p>
          </div>

          <div className="article-contact__details--email">
            <h3 className="heading-three align-items">
              <FaEnvelope className="align-items__icon" /> Email
            </h3>
            <p className="paragraph">garethjhind@gmail.com</p>
          </div>

          <div className="article-contact__details--github">
            <h3 className="heading-three align-items">
              <FaGithub className="align-items__icon" /> Github
            </h3>
            <p className="paragraph">
              <a href="https://github.com/gazjosef">
                https://github.com/gazjosef
              </a>
            </p>
          </div>

          <div className="article-contact__details--linkedIn">
            <h3 className="heading-three align-items">
              <FaLinkedin className="align-items__icon" /> LinkedIn
            </h3>
            <p className="paragraph">
              <a href="https://www.linkedin.com/in/gareth-h-a32448191/">
                https://www.linkedin.com/in/gareth-h-a32448191/
              </a>
            </p>
          </div>
        </section>
      </section>
    </article>
  );
}
