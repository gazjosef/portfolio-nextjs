import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((t) => !t);
  };

  const MenuItems = [
    {
      title: "Home",
      url: "#home",
      cName: "navbar__links",
    },
    {
      title: "Story",
      url: "#story",
      cName: "navbar__links",
    },
    {
      title: "Portfolio",
      url: "#portfolio",
      cName: "navbar__links",
    },
    {
      title: "Contact",
      url: "#contact",
      cName: "navbar__links",
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link href="/">
          <a>
            <span>Gareth Hind</span> Web Developer
          </a>
        </Link>
      </div>
      <div className="navbar__menu-icon">
        <IconContext.Provider value={{ className: "fa-react" }}>
          {toggle ? (
            <FaTimes onClick={handleClick} />
          ) : (
            <FaBars onClick={handleClick} />
          )}
        </IconContext.Provider>
      </div>
      <ul
        role="list"
        className={toggle ? "navbar__menu active" : "navbar__menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.url}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
