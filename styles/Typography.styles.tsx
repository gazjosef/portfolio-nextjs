import styled from "styled-components";

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
