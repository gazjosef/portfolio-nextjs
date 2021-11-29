import Link from "next/link";

export default function CategoryList({ categories }) {
  return (
    <div className="categoryList">
      <h3 className="categoryList__heading">Blog Categories</h3>
      <ul className="categoryList__divider">
        {categories.map((category, index) => (
          <Link key={index} href={`/category/${category.toLowerCase()}`}>
            <li>{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
