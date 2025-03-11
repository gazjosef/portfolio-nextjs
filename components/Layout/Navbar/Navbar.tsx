import { useState } from "react";
import { Links } from "../Links";

// Styles & Icons
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

export const NavbarContainer = styled.nav`
  position: relative;
`;

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = () => {
    setToggle((t) => !t);
  };

  return (
    <nav className="navbar | u-flex u-items-center">
      <NavbarList toggle={toggle}>
        {Links.map((item, index) => {
          return (
            <li className="nav-links" key={index}>
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </NavbarList>
    </nav>
  );
}

interface NavbarListProps {
  toggle: boolean;
  children: React.ReactNode;
}

function NavbarList({ toggle, children }: NavbarListProps) {
  return (
    <ul
      id="primary-navigation"
      data-visible={false}
      role="list"
      className={`navbar__menu 
        ${toggle ? "navbar__active" : ""}
      `}
    >
      {children}
    </ul>
  );
}

interface NavbarListToggleBtnProps {
  toggle: boolean;
  handleClick: () => void;
}

function NavbarListToggleBtn({
  toggle,
  handleClick,
}: NavbarListToggleBtnProps) {
  return (
    <div
      className="navbar__mobile-nav-toggle sr-only"
      aria-label="Toggle navigation"
      aria-expanded={toggle}
    >
      <IconContext.Provider value={{}}>
        {toggle ? (
          <FaTimes onClick={handleClick} />
        ) : (
          <FaBars onClick={handleClick} />
        )}
      </IconContext.Provider>
    </div>
  );
}
