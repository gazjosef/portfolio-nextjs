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
            I&lsquo;m a web developer with in-depth experience in UI/UX design.
            In a nutshell, I create websites that help organizations address
            business challenges and meet their needs.
          </p>
          <p className="paragraph">
            I manage everything from website navigation and layout to a
            company&lsquo;s web hosting and security architecture. Please check
            out my portfolio below.
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
