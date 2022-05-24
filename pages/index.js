// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

import Hero from "./articles/hero";
import Story from "./articles/story";
import Portfolio from "./articles/portfolio";
import Contact from "./articles/contact";

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
