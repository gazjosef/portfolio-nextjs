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
            <Link href="/" className="nav-links">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/story" className="nav-links">
              <a>Story</a>
            </Link>
          </li>
          <li>
            <Link href="/work" className="nav-links">
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-links">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
