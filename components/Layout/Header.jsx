import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header | u-flex u-items-center u-fs-nav">
      <div className="container | u-mx-auto | u-flex u-justify-between">
        <div className="">
          <Link href="/">
            <a className="u-fw-semi-bold u-text-black u-uppercase">
              <span className="u-fw-bold u-text-primary-300">Gareth Hind</span>{" "}
              <span className="header__span">Web Developer</span>
            </a>
          </Link>
        </div>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
