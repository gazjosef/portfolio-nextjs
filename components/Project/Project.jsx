import { useRef, useEffect } from "react";
import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import CategoryLabel from "../Category/CategoryLabel";
import { gsapFadeIn } from "@/components/Animation";

export default function Project({ project }) {
  const projectRef = useRef(null);

  useEffect(() => {
    gsapFadeIn(projectRef, 0.5);
  }, []);

  let categories = project.frontmatter.categories;

  return (
    <div className="post" ref={projectRef}>
      <div className="post__project">
        <div className="post__title">
          <h3 className="heading-three">{project.frontmatter.title}</h3>
        </div>

        <a href={`${project.frontmatter.live}`}>
          {project.frontmatter.cover_image && (
            <Image
              src={project.frontmatter.cover_image}
              alt={project.frontmatter.title}
              height={420}
              width={600}
              className="post__image"
            />
          )}
        </a>

        <div className="post__label">
          {categories &&
            categories.map((category, index) => (
              <CategoryLabel key={index}>{category}</CategoryLabel>
            ))}
        </div>
      </div>
      <div className="post__buttons">
        <div className="post__description">
          <p>{project.frontmatter.excerpt}</p>
        </div>
        <div className="post__extra">
          <a
            className="post__button align-items"
            href={`${project.frontmatter.github}`}
          >
            <IconContext.Provider
              value={{ className: "post__icon align-items__icon" }}
            >
              <FaGithub className="align-items__icon" /> GitHub
            </IconContext.Provider>
          </a>

          <a
            className="post__button align-items"
            href={`${project.frontmatter.live}`}
          >
            <IconContext.Provider
              value={{ className: "post__icon align-items__icon" }}
            >
              <FaEye className="align-items__icon" /> Live
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </div>
  );
}
