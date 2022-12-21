export default function CategoryLabel({ children }) {
  const colorKey = {
    API: "darkgrey",
    CSS: "blue",
    Express: "yellowgreen",
    HeadlessCMS: "deeppink",
    HTML: "orangered",
    JavaScript: "crimson",
    MongoDB: "green",
    NextJS: "black",
    Nuxt: "forestgreen",
    Python: "yellow",
    React: "deepskyblue",
    Redux: "rebeccapurple",
    RestAPI: "dodgerblue",
    SASS: "hotpink",
    Shopify: "forestgreen",
    Tailwind: "deepskyblue",
    Testing: "firebrick",
    TypeScript: "dodgerblue",
    Vue: "mediumseagreen",
    $Paid: "limegreen",
  };
  return <div className={`label bg--${colorKey[children]}`}>{children}</div>;
}
