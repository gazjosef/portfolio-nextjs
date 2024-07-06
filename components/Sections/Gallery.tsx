import { useState } from "react";
import Project from "../Snippets/Project";
import jsonData from "./projects.json";

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
  return (
    <ul role="list" className="grid__filter-btns">
      <li role="listitem">
        <button
          className={`btn ${filter === "all" ? "active" : ""}`}
          onClick={() => onFilter("all")}
        >
          All
        </button>
      </li>
      <li role="listitem">
        <button
          className={`btn ${filter === "apps" ? "active" : ""}`}
          onClick={() => onFilter("apps")}
        >
          Apps
        </button>
      </li>
      <li role="listitem">
        <button
          className={`btn ${filter === "games" ? "active" : ""}`}
          onClick={() => onFilter("games")}
        >
          Games
        </button>
      </li>
      <li role="listitem">
        <button
          className={`btn ${filter === "websites" ? "active" : ""}`}
          onClick={() => onFilter("websites")}
        >
          Websites
        </button>
      </li>
    </ul>
  );
}
