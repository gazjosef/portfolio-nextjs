import { useState } from "react";
import Project from "../../Snippets/Project";
import jsonData from "../projects.json";

interface ProjectProps {
  title: string;
  excerpt: string;
  cover_image: string;
  categories: string[];
  tag: string;
  github: string;
  live: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const filteredProjects =
    filter === "all"
      ? jsonData
      : jsonData.filter((project) => project.tag.includes(filter));

  function handleFilter(f: string) {
    setFilter(f);
  }
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="grid__header">
          <GalleryFilterBtns filter={filter} onFilter={handleFilter} />
        </div>
        <div id="grid-container" className="grid__container">
          {filteredProjects &&
            filteredProjects.map((project: ProjectProps) => (
              <Project project={project} key={project.title} />
            ))}
        </div>
      </div>
    </section>
  );
}

interface GalleryFilterBtnsProps {
  filter: string;
  onFilter: (filter: string) => void;
}

function GalleryFilterBtns({ filter, onFilter }: GalleryFilterBtnsProps) {
  const filters = ["all", "apps", "games", "websites"];

  return (
    <ul role="list" className="grid__filter-btns">
      {filters.map((filterOption) => (
        <li key={filterOption} role="listitem">
          <button
            className={`btn ${filter === filterOption ? "active" : ""}`}
            onClick={() => onFilter(filterOption)}
          >
            {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
}
