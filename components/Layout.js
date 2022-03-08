import { Meta } from "./Meta";
import { useRouter } from "next/router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

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
