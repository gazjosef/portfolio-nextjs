import Link from "next/link";
import CategoryList from "@/components/CategoryList";
import Post from "@/components/Post";
import { getPosts } from "@/lib/posts";

export default function Work({ projects, categories }) {
  return (
    <section className="section-work">
      <main className="section-work__main">
        <h1 className="section-work__title">Portfolio</h1>
        <div className="section-work__grid">
          {projects.map((project, index) => (
            <Post key={index} project={project} />
          ))}
        </div>
      </main>

      <aside className="section-work__sidebar">
        <CategoryList categories={categories} />
      </aside>
    </section>
  );
}

export async function getStaticProps() {
  const projects = getPosts();

  // Get categories for sidebar
  const categories = projects.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  return {
    props: {
      projects: getPosts(),
      categories: uniqueCategories,
    },
  };
}
