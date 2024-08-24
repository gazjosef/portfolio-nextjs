import Image from "next/image";
import useGsapFadeDown from "../../../hooks/useGsapFadeDown";
import Button from "../../Snippets/Button";

export default function Hero() {
  const [heroTitleRef, heroImgRef, heroTextRef] = useGsapFadeDown();

  return (
    <section id="home" className="hero section section--hero">
      <div className="container u-mt-lg">
        <div className="u-grid u-even-columns u-gap-2">
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
        </div>
      </div>
    </section>
  );
}
