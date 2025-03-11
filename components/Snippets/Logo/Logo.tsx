import Link from "next/link";
import styled from "styled-components";

const LogoHeading = styled.div`
  font-size: 1.6rem;
  letter-spacing: 0.15rem;

  a {
    color: var(--clr-primary-500);
  }

  @include respond(sm-phone) {
    display: none;
  }
`;

const LogoSpan = styled.span`
  /* color: var(--clr-primary-400); */
  color: hsl(202, 61%, 47%);
  font-weight: 800;
`;

const Logo = () => {
  return (
    <LogoHeading>
      <Link href="https://gareth-hind-portfolio.vercel.app/">
        <LogoSpan>Gareth Hind</LogoSpan> Web Developer
      </Link>
    </LogoHeading>
  );
};
export default Logo;
