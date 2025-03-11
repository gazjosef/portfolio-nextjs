import styled from "styled-components";

export const PrimaryHeading = styled.h1`
  color: var(--clr-primary-400);
  font-family: $font-third;
  font-size: 3.5rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;

  // Underline
  &::after {
    content: "";
    width: 10rem;
    border-bottom: 4px solid var(--clr-primary-400);
    margin-inline: auto;
    padding-top: 0.6rem;

    display: block;
  }
`;

export const Paragraph = styled.p`
  max-width: 45ch;

  color: $clr-primary-100;
  font-size: clamp(1.6rem, 1.8vw, 2rem);
  letter-spacing: 0.15rem;
  line-height: 2;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
