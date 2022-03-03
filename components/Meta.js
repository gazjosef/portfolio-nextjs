import Head from "next/head";

export const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      {/* <link rel="manifest" href="img/favicon_io/site.webmanifest" /> */}

      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        // crossOrigin
      />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Gareth Hind | Web Developer",
  keywords: "web design, web development",
  description:
    "Get scalable, modern and reliable custom software and let your business grow. ",
};
