import React from "react";
import Image from "next/image";
import { FaArrowCircleDown } from "react-icons/fa";
import useGsapFadeDown from "../../hooks/useGsapFadeDown";

const Story: React.FC = () => {
  const [storyTitleRef, storyImgRef, storyTextRef] = useGsapFadeDown();

  return (
    <section id="story" className="section">
      <section className="article-story__title">
        <h1
          className="heading-one | u-mb-lg u-center-text"
          ref={storyTitleRef as React.LegacyRef<HTMLHeadingElement>}
        >
          Story
        </h1>
      </section>
      <div className="container | u-mx-auto u-grid u-even-columns u-gap-5">
        <section ref={storyImgRef as React.RefObject<HTMLElement>}>
          <Image
            src="/images/section/undraw_programming_re_kg9v.svg"
            alt="responsive"
            width={1000}
            height={500}
          />
        </section>
        <section
          className="article-story__text"
          ref={storyTextRef as React.RefObject<HTMLElement>}
        >
          <p className="paragraph">
            With a keen eye for design and a love for creating seamless user
            experiences, I specialize in crafting modern, responsive websites
            using HTML, CSS, JavaScript, and React.
          </p>
          <p className="paragraph">
            I thrive on turning ideas into visually appealing and functional
            realities, constantly exploring new trends and techniques to push
            the boundaries of web development.
          </p>
          <p className="paragraph">
            Let&apos;s build something awesome together!
          </p>
          <p>
            <button className="btn btn--cta btn--inverse">
              <a
                href="#contact"
                className="u-flex u-items-center u-justify-center u-gap-1"
              >
                Contact
                <FaArrowCircleDown />
              </a>
            </button>
          </p>
        </section>
      </div>
    </section>
  );
};
export default Story;
