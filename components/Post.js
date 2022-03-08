import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";
import { FaEye, FaGithub } from "react-icons/fa";

export default function Post({ project }) {
  let categories = project.frontmatter.categories;
  // console.log(categories);
  return (
    <div className="post">
      <div className="post__title">
        <h3 className="heading-three">{project.frontmatter.title}</h3>
      </div>

      <Image
        src={project.frontmatter.cover_image}
        alt=""
        height={420}
        width={600}
        className="post__image"
      />

      <div className="post__label">
        {categories.map((category, index) => (
          <CategoryLabel key={index}>{category}</CategoryLabel>
        ))}
      </div>

      <div className="post__description">
        <p>{project.frontmatter.excerpt}</p>
      </div>

      <div className="post__extra">
        <a
          className="post__button align-items"
          href={`${project.frontmatter.github}`}
        >
          <FaGithub className="align-items__icon" /> Code
        </a>

        <a
          className="post__button align-items"
          href={`${project.frontmatter.live}`}
        >
          <FaEye className="align-items__icon" /> Live
        </a>
      </div>
    </div>
  );
}
