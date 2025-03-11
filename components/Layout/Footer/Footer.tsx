import styled from "styled-components";

const currentYear = new Date().getFullYear();

const FooterSection = styled.footer`
  height: 5rem;

  display: grid;
  place-content: center;
`;

export default function Footer() {
  return (
    <FooterSection>
      <div>Copyright &copy; Gareth Hind {currentYear}</div>
    </FooterSection>
  );
}
