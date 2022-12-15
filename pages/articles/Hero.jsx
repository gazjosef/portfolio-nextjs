import { useRef, useEffect } from "react";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import { gsapFadeDown } from "@/components/Animation";

export default function Hero() {
  const heroImgRef = useRef(null);
  const heroTextRef = useRef(null);

  useEffect(() => {
    gsapFadeDown(heroImgRef, 0.5);
    gsapFadeDown(heroTextRef, 0.25);
  }, []);

  return (
    <article id="home" className="article-home">
      <section className="article-home__text" ref={heroTextRef}>
        <div>
          <h1 className="heading-home">
            Hi, I&apos;m Gareth. I&apos;m a <span>Web Developer</span>.
          </h1>
          <p className="paragraph">
            I spend my time, night and day, coding front-end websites and
            back-end databases.
          </p>
          <button className="btn btn--cta">
            <a href="#portfolio" className="align-items">
              Portfoloio
              <FaArrowCircleRight className="align-items__arrow" />
            </a>
          </button>
        </div>
      </section>

      <section className="article-home__image" ref={heroImgRef}>
        <Image
          src="/images/section/undraw_developer_activity_re_39tg.svg"
          alt="responsive"
          width={1000}
          height={700}
        />
      </section>
    </article>
  );
}
