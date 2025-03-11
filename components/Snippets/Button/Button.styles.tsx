import styled from "styled-components";

export const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #ff7eb3, #ff758c);
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(255, 117, 140, 0.4);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(255, 117, 140, 0.6);
  }
`;
