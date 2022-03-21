export default function CategoryLabel({ children }) {
  const colorKey = {
    API: "darkgrey",
    SASS: "hotpink",
    JavaScript: "orangered",
    Python: "steelblue",
    Shopify: "forestgreen",
    NextJS: "black",
    React: "midnightblue",
    $Paid: "limegreen",
  };
  return <div className={`label bg--${colorKey[children]}`}>{children}</div>;
}
