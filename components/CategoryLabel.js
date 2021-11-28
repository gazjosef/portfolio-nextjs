import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    Sass: "hotpink",
    JavaScript: "orangered",
    Python: "steelblue",
    Shopify: "forestgreen",
    React: "midnightblue",
    Paid: "limegreen",
  };
  return (
    <div className={`label bg--${colorKey[children]}`}>
      <Link href={`/blog/catgeory/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
