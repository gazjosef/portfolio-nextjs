import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useGsapFadeDown from "../../../hooks/useGsapFadeDown";
// Styles
import { PrimaryHeading } from "../../../styles/Typography.styles";
import { Section, Wrapper } from "../../../styles/Layout.styles";

export default function Contact() {
  const [contactTitleRef, contactDetailsRef] = useGsapFadeDown();

  return (
    <Section id="contact" variant="contact">
      <PrimaryHeading
        className="u-mb-2xl u-mx-auto u-center-text"
        ref={contactTitleRef as React.LegacyRef<HTMLHeadingElement>}
      >
        Contact
      </PrimaryHeading>
      <Wrapper>
        <section
          className="article-contact__details"
          ref={contactDetailsRef as React.RefObject<HTMLElement>}
        >
          <div>
            <a
              href="https://github.com/gazjosef"
              className=" u-flex u-flex-col u-items-center u-justify-center u-gap-1"
            >
              <FaGithub size="10rem" color="#145da0" />
              <h3 className="heading-three">Github</h3>
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/gareth-h-a32448191/"
              className=" u-flex u-flex-col u-items-center u-justify-center u-gap-1"
            >
              <FaLinkedin size="10rem" color="#145da0" />
              <h3 className="heading-three">LinkedIn</h3>
            </a>
          </div>
        </section>
      </Wrapper>
    </Section>
  );
}
