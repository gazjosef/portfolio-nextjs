// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

import Hero from "./articles/Hero";
import Story from "./articles/Story";
import Portfolio from "./articles/Portfolio";
import Contact from "./articles/Contact";

export default function Home({ projects }) {
  return (
    <>
      <Hero />
      <Story />
      <Portfolio />
      <Contact />
    </>
  );
}

// export async function getStaticProps() {
//   const files = fs.readdirSync(path.join("projects"));

//   const projects = files.map((filename) => {
//     const slug = filename.replace(".md", "");

//     const markdownWithMeta = fs.readFileSync(
//       path.join("projects", filename),
//       "utf-8"
//     );

//     const { data: frontmatter } = matter(markdownWithMeta);

//     return {
//       slug,
//       frontmatter,
//     };
//   });

//   return {
//     props: {
//       projects,
//     },
//   };
// }
