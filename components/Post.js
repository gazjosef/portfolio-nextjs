import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";
import { FaEye, FaGithub } from "react-icons/fa";

export default function Post({ project }) {
  let categories = project.frontmatter.categories;
  // console.log(categories);
  return (
    <div className="post">
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
        <a>{project.frontmatter.title}</a>
        <p>{project.frontmatter.excerpt}</p>
      </div>

      <div className="post__extra">
        <a className="post__button" href={`${project.frontmatter.github}`}>
          <FaGithub /> Code
        </a>

        <a className="post__button" href={`${project.frontmatter.live}`}>
          <FaEye /> Live
        </a>
      </div>
    </div>
  );
}
