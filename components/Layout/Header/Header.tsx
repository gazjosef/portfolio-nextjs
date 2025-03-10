import Link from "next/link";
import Navbar from "../Navbar/Navbar";

import styled from "styled-components";
import { Flex, Wrapper } from "../../../styles/Layout";

export const HeaderContainer = styled.div`
  position: fixed;
  background-color: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  min-height: 8rem;
  width: 100%;
  z-index: 100;

  display: flex;
  align-items: center;

  text-decoration: none;
  text-transform: uppercase;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        <Flex alignItems="center" justifyContent="space-between">
          <div className="heading-logo">
            <Link href="https://gareth-hind-portfolio.vercel.app/">
              <span>Gareth Hind</span> Web Developer
            </Link>
          </div>

          <Navbar />
        </Flex>
      </Wrapper>
    </HeaderContainer>
  );
}
