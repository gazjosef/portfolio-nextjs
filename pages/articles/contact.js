import { useRef, useEffect } from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactImgRef = useRef(null);

  useEffect(() => {
    const el = contactImgRef.current;
    gsap.fromTo(
      el,
      { rotation: 0 },
      {
        rotation: 180,
        duration: 3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <article id="contact" className="article-contact">
      <section className="article-contact__title">
        <h1 className="heading-one">Contact</h1>
      </section>

      <section className="article-contact__image" ref={contactImgRef}>
        <Image
          src="/images/section/undraw_profile_re_4a55.svg"
          alt="responsive"
          width={400}
          height={280}
        />
      </section>

      <section className="article-contact__details">
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
    </article>
  );
}
