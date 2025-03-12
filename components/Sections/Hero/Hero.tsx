import React from "react";
import Image from "next/image";
import Button from "../../Snippets/Button";
// Styles
import styled from "styled-components";
import { Grid, Section, Wrapper } from "../../../styles/Layout.styles";
import { Paragraph } from "../../../styles/Typography.styles";
// import Button2 from "../../Snippets/Button/Button2";
// Animation
import useGsapFadeDown from "../../../hooks/useGsapFadeDown";

export const HeroSection = styled.section`
  min-height: 100svh;
  background-color: var(--clr-primary-200);
`;

export const HeroHeading = styled.h1`
  max-width: 14ch;

  color: white;
  font-family: "Poppins", sans-serif;
  font-size: clamp(3.5rem, 4.5vw, 5.5rem);
  letter-spacing: 2px;
  line-height: 1.3;

  span {
    color: hsl(202, 61%, 47%);
  }
  /*
    @include respond(tab-port) {
      margin-inline: auto;

      h1 {
        text-align: left;
        font-size: clamp(1.6rem, 2.5vw, 4rem);
      }
    } */
`;

export const HeroText = styled.p`
  min-height: 100svh;
  background-color: var(--clr-primary-200);
`;

export default function Hero() {
  const [heroTitleRef, heroImgRef, heroTextRef] = useGsapFadeDown();

  return (
    <Section id="home" variant="hero">
      <Wrapper>
        <Grid columns="repeat(2, 1fr)" gap="2rem">
          <section ref={heroTextRef}>
            <HeroHeading ref={heroTitleRef}>
              Hi, I&apos;m <span>Gareth</span>.
            </HeroHeading>

            <Paragraph ref={heroTextRef}>
              I am a Sydney-based web developer with a passion for creating
              engaging, responsive, and user-friendly websites.
            </Paragraph>

            <Button title="Portfolio" styles={"btn--cta"} href={"#portflio"} />
            {/* <Button2 /> */}
          </section>
          <section ref={heroImgRef}>
            <Image
              src="/images/section/undraw_developer_activity_re_39tg.svg"
              alt="responsive"
              width={1000}
              height={700}
            />
          </section>
        </Grid>
      </Wrapper>
    </Section>
  );
}
