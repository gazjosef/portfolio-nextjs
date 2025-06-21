import React from "react";
import Image from "next/image";
// Components
import Button from "../../Snippets/Button";
// import Button2 from "../../Snippets/Button/Button2";
// Styles
import { Grid, Section, Wrapper } from "../../../styles/Layout.styles";
import { Paragraph } from "../../../styles/Typography.styles";
import { HeroHeading } from "./Hero.styles";
// Animation
import useGsapFadeDown from "../../../hooks/useGsapFadeDown";

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

            <Button title="Portfolio" styles={"btn--cta"} href={"#portfolio"} />
          </section>
          <Image
            src="/images/section/undraw_developer_activity_re_39tg.svg"
            alt="responsive"
            width={1000}
            height={700}
            ref={heroImgRef}
          />
        </Grid>
      </Wrapper>
    </Section>
  );
}
