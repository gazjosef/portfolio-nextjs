import { Meta } from "../Meta/Meta";
import { useRouter } from "next/router";

import { Nav } from "../Nav/Nav";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <header>
        <Meta />
      </header>

      <Nav />

      {router.pathname === "/"}

      <main>{children}</main>

      <Footer />
    </>
  );
};
