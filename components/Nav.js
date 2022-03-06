import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link href="/">
          <a>
            <span>Gareth Hind</span> Web Developer
          </a>
        </Link>
      </div>
      <div className="navbar__links">
        <ul>
          <li>
            <a href="#home" className="nav-links">
              Home
            </a>
          </li>
          <li>
            <a href="#story" className="nav-links">
              Story
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-links">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-links">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
