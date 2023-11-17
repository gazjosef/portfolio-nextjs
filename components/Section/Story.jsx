import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import useGsapFadeDown from "hooks/useGsapFadeDown";

export default function Story() {
  const [storyTitleRef, storyImgRef, storyTextRef] = useGsapFadeDown();

  return (
    <section id="story" className="section">
      <div className="container | u-mx-auto">
        <section className="article-story__title">
          <h1 className="heading-one | u-mb-lg u-center-text" ref={storyImgRef}>
            Story
          </h1>
        </section>
      </div>
      <div className="container | u-mx-auto u-grid u-even-columns u-gap-5">
        <section ref={storyImgRef}>
          <Image
            src="/images/section/undraw_programming_re_kg9v.svg"
            alt="responsive"
            width={1000}
            height={700}
          />
        </section>
        <section className="article-story__text" ref={storyTextRef}>
          <p className="paragraph">
            I&apos;m a front-end wizard with a knack for turning ideas into
            interactive and user-friendly websites. From crafting clean HTML/CSS
            to diving deep into JavaScript magic, I thrive on making the web a
            better place.
          </p>
          <p className="paragraph">
            With expertise in React, Shopify, and a sprinkle of Vue, I&apos;m on
            a mission to create seamless user experiences. Let&apos;s build
            something awesome together!TEST
          </p>

          <button className="btn btn--cta btn--inverse | u-max-w-max u-py-2">
            <a
              href="#portfolio"
              className="u-flex u-items-center u-justify-center"
            >
              Portfolio
              <FaArrowCircleRight className="u-ml-1" />
            </a>
          </button>
        </section>
      </div>
    </section>
  );
}
