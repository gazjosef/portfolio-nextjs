import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import Post from "@/components/Post";

export default function CategoryBlogPage({ projects }) {
  return (
    <section className="section-work">
      <h1 className="section-work__title">Portfolio</h1>

      <div className="section-work__grid">
        {projects.map((project, index) => (
          <Post key={index} project={project} />
        ))}
      </div>

      {/* <div className="section-work__sidebar">
        <h1>Sidebar</h1>
      </div> */}
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

    return frontmatter.category.toLowerCase();
  });

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
  console.log(category_name);

  const files = fs.readdirSync(path.join("projects"));

  const projects = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  //   console.log(projects);

  return {
    props: {
      projects,
    },
  };
}
