// import Link from "next/link";
// import CategoryList from "@/components/CategoryList";
// import Post from "@/components/Post";
// import { getPosts } from "@/lib/posts";

export default function Portfolio({ projects, categories }) {
  return (
    <article className="article-portfolio">
      <section className="article-portfolio__title">Title</section>
      <section className="article-portfolio__grid">Grid</section>
      <section className="article-portfolio__aside">Aside</section>
    </article>
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
