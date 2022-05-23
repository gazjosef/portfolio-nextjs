import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Post from "@/components/Post";
import CategoryList from "@/components/CategoryList";
import { getPosts } from "@/lib/posts";

export default function CategoryBlogPage({
  projects,
  categoryName,
  categories,
}) {
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

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("projects"));

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    // return frontmatter.category.toLowerCase();

    const fm = frontmatter.category.toLowerCase();

    if (fm) {
      return fm;
    }
  });

  console.log(categories);

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
  const projects = getPosts();

  // Get categories for sidebar
  const categories = projects.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  // Filter Projects by Category
  const categoryProjects = projects.filter(
    (project) => project.frontmatter.category.toLowerCase() === category_name
  );

  return {
    props: {
      projects: categoryProjects,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  };
}
