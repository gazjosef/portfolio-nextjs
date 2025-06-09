import { FooterSection, FooterText } from "./Footer.styles";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <FooterSection>
      <FooterText>Copyright &copy; Gareth Hind {currentYear}</FooterText>
    </FooterSection>
  );
}
