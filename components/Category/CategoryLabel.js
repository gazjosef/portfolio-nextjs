export default function CategoryLabel({ children }) {
  const colorKey = {
    API: "darkgrey",
    CSS: "blue",
    Express: "yellowgreen",
    HTML: "orangered",
    JavaScript: "crimson",
    Python: "yellow",
    MongoDB: "green",
    NextJS: "black",
    React: "deepskyblue",
    Testing: "firebrick",
    Redux: "rebeccapurple",
    RestAPI: "dodgerblue",
    SASS: "hotpink",
    Shopify: "forestgreen",
    TypeScript: "dodgerblue",
    $Paid: "limegreen",
  };
  return <div className={`label bg--${colorKey[children]}`}>{children}</div>;
}
