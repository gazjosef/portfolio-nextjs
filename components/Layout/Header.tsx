import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="heading-logo">
          <Link href="https://gareth-hind-portfolio.vercel.app/">
            <span>Gareth Hind</span> Web Developer
          </Link>
        </div>

        <Navbar />
      </div>
    </header>
  );
}
