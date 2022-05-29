import { useRef, useEffect } from "react";
import Image from "next/image";

import Post from "@/components/Post";

export default function Portfolio({ projects }) {
  console.log("Portfolio", projects);

  return (
    <article id="portfolio" className="article-portfolio">
      <section className="article-portfolio__title">
        <h1 className="heading-one">Portfolio</h1>
      </section>
      <section className="article-portfolio__grid">
        {/* {projects.map((project, index) => (
          <Post key={index} project={project} />
        ))} */}

        <h2>Hello World</h2>
      </section>
    </article>
  );
}
