interface LabelProps {
  children: string;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  const colorKey: { [key: string]: string } = {
    API: "darkgrey",
    CSS: "blue",
    Express: "yellowgreen",
    HeadlessCMS: "deeppink",
    HTML: "orangered",
    JavaScript: "crimson",
    Liquid: "cornflowerblue",
    MongoDB: "green",
    NextJS: "black",
    Nuxt: "forestgreen",
    Python: "yellow",
    React: "midnightblue",
    Redux: "rebeccapurple",
    RestAPI: "palevioletred",
    SASS: "hotpink",
    Shopify: "forestgreen",
    Tailwind: "deepskyblue",
    Testing: "firebrick",
    TypeScript: "dodgerblue",
    Vite: "rebeccapurple",
    Vue: "mediumseagreen",
    $Paid: "limegreen",
  };
  const badgeKey: { [key: string]: string } = {
    JavaScript: "javascript-icon",
    Jest: "jest-icon",
    MongoDB: "mongodb-icon",
    NextJS: "nextjs-dark-icon",
    React: "react-icon",
    Redux: "redux-icon",
    SASS: "sass-icon",
    "Sanity.io": "sanity-icon",
    Shopify: "shopify-icon",
    "styled-components": "styled-components-icon",
    Tailwind: "tailwindcss-icon",
    TypeScript: "typescript-icon",
  };

  return (
    <div className={"label"}>
      <img
        src={`/images/label-icons/${badgeKey[children]}.png`}
        alt={`${children}`}
      />{" "}
      {children}
    </div>
  );
};

export default Label;
