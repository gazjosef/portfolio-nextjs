import Image from "next/image";
import useGsapFadeDown from "../../../hooks/useGsapFadeDown";
import Button from "../../Snippets/Button";
import styled from "styled-components";
import { Grid, Wrapper } from "../../../styles/Layout.styles";

export const HeroSection = styled.section`
  min-height: 100vh;
  min-height: 100svh;
  background-color: var(--clr-primary-200);
`;

export default function Hero() {
  const [heroTitleRef, heroImgRef, heroTextRef] = useGsapFadeDown();

  return (
    <HeroSection id="home">
      <Wrapper>
        <Grid columns="repeat(2, 1fr)" gap="2rem">
          <div ref={heroTextRef as React.RefObject<HTMLDivElement>}>
            <h1 className="heading-hero">
              Hi, I&apos;m <span>Gareth</span>.
            </h1>

            <p className="paragraph">
              I am a Sydney-based web developer with a passion for creating
              engaging, responsive, and user-friendly websites.
            </p>

            <Button
              title="Portfoloio"
              styles={"btn--cta"}
              href={"#portfolio"}
            />
          </div>
          <div ref={heroImgRef as React.RefObject<HTMLDivElement>}>
            <Image
              src="/images/section/undraw_developer_activity_re_39tg.svg"
              alt="responsive"
              width={1000}
              height={700}
            />
          </div>
        </Grid>
      </Wrapper>
    </HeroSection>
  );
}
