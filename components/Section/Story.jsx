import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import CategoryLabel from "@/components/Category/CategoryLabel";
import useGsapFadeDown from "hooks/useGsapFadeDown";

export default function Story() {
  const [storyTitleRef, storyImgRef, storyTextRef] = useGsapFadeDown();

  return (
    <section id="story" className="section">
      <div className="container | u-mx-auto">
        <section className="article-story__title">
          <h1
            className="heading-one | u-margin-bottom-medium u-center-text"
            ref={storyImgRef}
          >
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
          <p className="paragraph | u-mt-md">
            Through my projects, I strive to combine my technical skills with my
            creative vision to develop websites that not only meet the needs of
            clients but also provide a positive user experience.
          </p>
        </section>
        <section className="article-story__text" ref={storyTextRef}>
          <p className="paragraph | u-fw-semi-bold">Tech Stack:</p>

          <p className="paragraph post__label">
            <CategoryLabel>HTML</CategoryLabel>
            <CategoryLabel>CSS</CategoryLabel>
            <CategoryLabel>SASS</CategoryLabel>
            <CategoryLabel>Tailwind</CategoryLabel>
            <CategoryLabel>JavaScript</CategoryLabel>
            <CategoryLabel>TypeScript</CategoryLabel>
            <CategoryLabel>React</CategoryLabel>
            <CategoryLabel>NextJS</CategoryLabel>
            <CategoryLabel>Vue</CategoryLabel>
            <CategoryLabel>Nuxt</CategoryLabel>
            <CategoryLabel>Testing</CategoryLabel>
          </p>

          <p className="paragraph post__label | u-mb-md">
            <CategoryLabel>Express</CategoryLabel>
            <CategoryLabel>HeadlessCMS</CategoryLabel>
            <CategoryLabel>MongoDB</CategoryLabel>
            <CategoryLabel>Redux</CategoryLabel>
            <CategoryLabel>Shopify</CategoryLabel>
          </p>

          <button className="btn btn--cta btn--inverse | u-max-w-max">
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
