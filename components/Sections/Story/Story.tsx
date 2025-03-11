import React from "react";
import Image from "next/image";
import Button from "../../Snippets/Button";
import useGsapFadeDown from "../../../hooks/useGsapFadeDown";
import styled from "styled-components";
import { Paragraph, PrimaryHeading } from "../../../styles/Typography.styles";
import { Grid, Wrapper } from "../../../styles/Layout.styles";

const StorySection = styled.section`
  min-height: 100svh;
`;

export default function Story() {
  const [storyTitleRef, storyImgRef, storyTextRef] = useGsapFadeDown();

  return (
    <StorySection id="story">
      <PrimaryHeading className="u-mb-lg u-center-text" ref={storyTitleRef}>
        Story
      </PrimaryHeading>
      <Wrapper>
        <Grid gap="5rem">
          <Image
            src="/images/section/undraw_programming_re_kg9v.svg"
            alt="responsive"
            width={1000}
            height={500}
            ref={storyImgRef}
          />
          <section ref={storyTextRef}>
            <Paragraph>
              With a keen eye for design and a love for creating seamless user
              experiences, I specialise in crafting modern, responsive websites
              using HTML, CSS, JavaScript, and React.
            </Paragraph>
            <Paragraph>
              I thrive on turning ideas into visually appealing and functional
              realities, constantly exploring new trends and techniques to push
              the boundaries of web development.
            </Paragraph>
            <Paragraph>Let&apos;s build something awesome together!</Paragraph>
            <Paragraph>
              <Button
                title={"Contact"}
                styles={"btn--cta btn--inverse"}
                href={"#contact"}
              />
            </Paragraph>
          </section>
        </Grid>
      </Wrapper>
      {/* <section className="container | u-mx-auto u-grid u-even-columns u-gap-5">
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
      </section> */}
    </StorySection>
  );
}
