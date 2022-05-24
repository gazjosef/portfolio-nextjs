import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const storyImgRef = useRef(null);

  useEffect(() => {
    const el = storyImgRef.current;
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
    <article id="story" className="article-story">
      <section className="article-story__title">
        <h1 className="heading-one">Story</h1>
      </section>
      <section className="article-story__image" ref={storyImgRef}>
        <Image
          src="/images/section/undraw_programming_re_kg9v.svg"
          alt="responsive"
          width={500}
          height={350}
        />
      </section>
      <section className="article-story__text">
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

        <p className="paragraph">Please check out my portfolio!</p>
      </section>
    </article>
  );
}
