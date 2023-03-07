import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import useGsapFadeDown from "hooks/useGsapFadeDown";

export default function Hero() {
  const [heroTitleRef, heroImgRef, heroTextRef] = useGsapFadeDown();

  return (
    <section id="home" className="section | u-bg-primary-400">
      <div className="container | u-grid u-even-columns">
        <div ref={heroTextRef}>
          <h1 className="heading-home">
            Hi, I&apos;m Gareth. I&apos;m a <span>Web Developer</span>.
          </h1>
          <p className="paragraph">
            I spend my time, night and day, coding front-end websites and
            building content management systems.
          </p>
          <button className="btn btn--cta">
            <a
              href="#portfolio"
              className="u-flex u-items-center u-justify-center"
            >
              Portfoloio
              <FaArrowCircleRight className="u-ml-1" />
            </a>
          </button>
        </div>

        <div ref={heroImgRef}>
          <Image
            src="/images/section/undraw_developer_activity_re_39tg.svg"
            alt="responsive"
            width={1000}
            height={700}
          />
        </div>
      </div>
    </section>
  );
}
