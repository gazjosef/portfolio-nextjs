import { Layout } from "@/components/Layout/Layout";
import "@/styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
