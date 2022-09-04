import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsapFadeIn } from "@/components/Animation";
import { FaArrowCircleRight } from "react-icons/fa";
import CategoryLabel from "../../components/Category/CategoryLabel";

export default function Story() {
  const storyImgRef = useRef(null);
  const storyTextRef = useRef(null);

  useEffect(() => {
    gsapFadeIn(storyImgRef, 0.25);
    gsapFadeIn(storyTextRef, 0.5);
  }, []);

  return (
    <article id="story" className="article-story">
      <section className="article-story__title">
        <h1 className="heading-one">Story</h1>
      </section>
      <section className="article-story__image" ref={storyImgRef}>
        <Image
          src="/images/section/undraw_programming_re_kg9v.svg"
          alt="responsive"
          width={1000}
          height={700}
        />
      </section>
      <section className="article-story__text" ref={storyTextRef}>
        <p className="paragraph">
          I&apos;m a developer from Sydney, Australia. I&apos;ve been
          programming for over five years, mainly focusing on front-end
          projects.
        </p>

        <p className="paragraph">
          In this time, I&apos;ve learnt an array of programming languages,
          frameworks and libraries and continue to learn the latest trends and
          web technologies.
        </p>

        <p className="paragraph post__label">
          <CategoryLabel>HTML</CategoryLabel>
          <CategoryLabel>CSS</CategoryLabel>
          <CategoryLabel>SASS</CategoryLabel>
          <CategoryLabel>JavaScript</CategoryLabel>
          <CategoryLabel>TypeScript</CategoryLabel>
          <CategoryLabel>React</CategoryLabel>
          <CategoryLabel>NextJS</CategoryLabel>
        </p>

        <p className="paragraph post__label">
          <CategoryLabel>Express</CategoryLabel>
          <CategoryLabel>MongoDB</CategoryLabel>
          <CategoryLabel>Redux</CategoryLabel>
          <CategoryLabel>Shopify</CategoryLabel>
        </p>

        <p className="paragraph">Please check out my portfolio!</p>

        <button className="btn btn--cta btn--inverse">
          <a href="#portfolio" className="align-items">
            Click here
            <FaArrowCircleRight className="align-items__arrow" />
          </a>
        </button>
      </section>
    </article>
  );
}
