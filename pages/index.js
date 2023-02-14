import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByOrder } from "../utils";

import Hero from "@/components/Section/Hero";
import Story from "@/components/Section/Story";
import Portfolio from "@/components/Section/Portfolio";
import Contact from "@/components/Section/Contact";
import ScrollButton from "@/components/UI/ScrollButton";

export default function Home({ projects }) {
  return (
    <>
      <Hero />
      <Story />
      <Portfolio projects={projects} />
      <Contact />
      <ScrollButton />
    </>
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

  return {
    props: {
      projects: projects.sort(sortByOrder),
    },
  };
}
