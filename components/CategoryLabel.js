export default function CategoryLabel({ children }) {
  const colorKey = {
    API: "darkgrey",
    SASS: "hotpink",
    JavaScript: "orangered",
    Python: "yellow",
    Shopify: "forestgreen",
    NextJS: "black",
    React: "skyblue",
    TypeScript: "midnightblue",
    $Paid: "limegreen",
  };
  return <div className={`label bg--${colorKey[children]}`}>{children}</div>;
}
