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
            Armed with my laptop and a strong cup of coffee, I spend my whole
            day experimenting with HTML, CSS, and JavaScript.
          </p>
          <p className="paragraph">
            Whether you&lsquo;re seeking inspiration, searching for a skilled
            developer, or simply curious about the possibilities of web
            development, please check out my portfolio.
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
