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
    },
    {
      title: "Story",
      url: "#story",
    },
    {
      title: "Portfolio",
      url: "#portfolio",
    },
    {
      title: "Contact",
      url: "#contact",
    },
  ];

  return (
    <nav className="navbar | u-flex u-items-center | u-fs-nav">
      <ul
        id="primary-navigation"
        data-visible="false"
        role="list"
        className={`navbar__menu | u-flex u-items-center u-gap-3
          ${toggle ? "navbar__active" : ""}
            `}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className="u-mx-1 u-text-black u-uppercase" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>

      {/* TOGGLE BUTTON */}
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
    </nav>
  );
}

export default Navbar;
