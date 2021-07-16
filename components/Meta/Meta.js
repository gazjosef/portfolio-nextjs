import Head from "next/head";

export const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      <link rel="manifest" href="img/favicon_io/site.webmanifest" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />

      {/* //* Font: Montserrat */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />

      {/* //* Font: Poppins */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Gareth Hind Portfolio",
  keywords: "web design, web development",
  description:
    "Get scalable, modern and reliable custom software and let your business grow. ",
};
