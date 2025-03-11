import Logo from "components/Snippets/Logo/Logo";
import Navbar from "../Navbar/Navbar";
import { Flex, Wrapper } from "../../../styles/Layout.styles";
import { HeaderContainer } from "./Header.styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        <Flex alignItems="center" justifyContent="space-between">
          <Logo />
          <Navbar />
        </Flex>
      </Wrapper>
    </HeaderContainer>
  );
}
