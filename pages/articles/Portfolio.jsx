import Project from "@/components/Project/Project";

export default function Portfolio({ projects }) {
  return (
    <article id="portfolio" className="article-portfolio">
      <section className="article-portfolio__title">
        <h1 className="heading-one">Portfolio</h1>
      </section>
      <section className="article-portfolio__grid">
        {projects &&
          projects
            .sort((a, b) => b.order - a.order)
            .map((project, index) => <Project key={index} project={project} />)}
      </section>
    </article>
  );
}
