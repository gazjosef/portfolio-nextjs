import { Meta } from "./Meta";
import { useRouter } from "next/router";

import { Footer } from "@/components/Footer/Footer";
import Navbar from "./Navbar/Navbar";

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <header>
        <Meta />
      </header>

      <Navbar />

      {router.pathname === "/"}

      <main>{children}</main>

      <Footer />
    </>
  );
};
