import Image from "next/image";
import useGsapFadeDown from "../../../hooks/useGsapFadeDown";
import Button from "../../Snippets/Button";

export default function Story() {
  const [storyTitleRef, storyImgRef, storyTextRef] = useGsapFadeDown();

  return (
    <section id="story" className="section">
      <h1
        className="article-story__title heading-one | u-mb-lg u-center-text"
        ref={storyTitleRef}
      >
        Story
      </h1>
      <section className="container | u-mx-auto u-grid u-even-columns u-gap-5">
        <div ref={storyImgRef}>
          <Image
            src="/images/section/undraw_programming_re_kg9v.svg"
            alt="responsive"
            width={1000}
            height={500}
          />
        </div>
        <div className="article-story__text" ref={storyTextRef}>
          <p className="paragraph">
            With a keen eye for design and a love for creating seamless user
            experiences, I specialise in crafting modern, responsive websites
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
            <Button
              title={"Contact"}
              styles={"btn--cta btn--inverse"}
              href={"#contact"}
            />
          </p>
        </div>
      </section>
    </section>
  );
}
