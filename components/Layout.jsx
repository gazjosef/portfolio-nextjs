import { Meta } from "./Meta";
import { useRouter } from "next/router";

import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Header from "@/components/Layout/Header";

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <header>
        <Meta />
      </header>

      {/* <Navbar /> */}
      <Header />

      {router.pathname === "/"}

      <main>{children}</main>

      <Footer />
    </>
  );
};
