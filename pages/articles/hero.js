import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const homeImgRef = useRef(null);

  // useEffect(() => {
  //   const el = homeImgRef.current;
  //   gsap.fromTo(el, { rotation: 0 }, { rotation: 180, duration: 3 });
  // }, []);

  return (
    <article id="home" className="article-home">
      <section className="article-home__text">
        <div>
          <h1 className="heading-home">
            Hi, I&apos;m Gareth. I&apos;m a <span>Web Dev</span>.
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
      <section className="article-home__image" ref={homeImgRef}>
        <Image
          src="/images/section/undraw_developer_activity_re_39tg.svg"
          alt="responsive"
          width={500}
          height={350}
        />
      </section>
    </article>
  );
}
