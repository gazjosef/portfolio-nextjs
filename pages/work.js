import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";

export default function Work() {
  return (
    <section className="section-work">
      <h1>Work</h1>
      <div className="section-work__grid">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="section-work__sidebar">
        <h1>Sidebar</h1>
      </div>
    </section>
  );
}

export async function getStaticProps() {
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

  console.log(projects);

  return {
    props: {},
  };
}
