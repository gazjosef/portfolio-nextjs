import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

function Navbar2() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((t) => !t);
  };

  const menuItemClass = "u-mx-1 u-text-black";

  const MenuItems = [
    {
      title: "Home",
      url: "#home",
      cName: menuItemClass,
    },
    {
      title: "Story",
      url: "#story",
      cName: menuItemClass,
    },
    {
      title: "Portfolio",
      url: "#portfolio",
      cName: menuItemClass,
    },
    {
      title: "Contact",
      url: "#contact",
      cName: menuItemClass,
    },
  ];

  return (
    <nav className="navbar2 | u-fs-nav u-fw-semi-bold u-uppercase">
      <ul
        role="list"
        className={
          toggle ? "active navbar__list | u-flex" : "navbar__list | u-flex"
        }
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="navbar2__icon">
        <IconContext.Provider value={{ className: "fa-react" }}>
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

export default Navbar2;
