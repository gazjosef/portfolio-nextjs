import styled from "styled-components";

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
