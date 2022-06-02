export default function CategoryLabel({ children }) {
  const colorKey = {
    API: "darkgrey",
    Express: "yellowgreen",
    JavaScript: "crimson",
    Python: "yellow",
    MongoDB: "green",
    NextJS: "black",
    React: "deepskyblue",
    RestAPI: "dodgerblue",
    SASS: "hotpink",
    Shopify: "forestgreen",
    TypeScript: "midnightblue",
    $Paid: "limegreen",
  };
  return <div className={`label bg--${colorKey[children]}`}>{children}</div>;
}
