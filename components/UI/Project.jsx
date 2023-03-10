import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import CategoryLabel from "../Category/CategoryLabel";
import useGsapFadeDown from "hooks/useGsapFadeDown";

export default function Project({ project }) {
  const [projectTitleRef, projectImgRef, projectTextRef] = useGsapFadeDown();

  let categories = project.frontmatter.categories;

  return (
    <div className="post" ref={projectTitleRef}>
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

        <div className="post__description">
          <p>{project.frontmatter.excerpt}</p>
        </div>
      </div>
      <div className="post__buttons">
        <div className="post__extra">
          <a
            className="post__button | u-flex u-items-center u-justify-center"
            href={`${project.frontmatter.github}`}
          >
            <IconContext.Provider value={{ className: "post__icon" }}>
              <FaGithub className="u-mr-0_75" /> GitHub
            </IconContext.Provider>
          </a>

          <a
            className="post__button | u-flex u-items-center u-justify-center"
            href={`${project.frontmatter.live}`}
          >
            <IconContext.Provider value={{ className: "post__icon" }}>
              <FaEye className="u-mr-0_75" /> Live
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </div>
  );
}
