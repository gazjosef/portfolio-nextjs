import Project from "@/components/UI/Project";

export default function Portfolio({ projects }) {
  return (
    <section id="portfolio" className="section | u-bg-primary-400">
      <div className="container | u-mx-auto">
        <section>
          <h1 className="heading-one | u-margin-bottom-medium u-center-text">
            Portfolio
          </h1>
        </section>
      </div>
      <div className="container | u-mx-auto">
        <section className="article-portfolio__grid">
          {projects &&
            projects
              .sort((a, b) => b.order - a.order)
              .map((project, index) => (
                <Project key={index} project={project} />
              ))}
        </section>
      </div>
    </section>
  );
}