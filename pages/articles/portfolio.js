import { useRef, useEffect } from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
import Post from "@/components/Post";

export default function Portfolio({ projects }) {
  //   const homeImgRef = useRef(null);

  //   useEffect(() => {
  //     const el = homeImgRef.current;
  //     gsap.fromTo(el, { rotation: 0 }, { rotation: 180, duration: 3 });
  //   }, []);
  console.log("projects", projects);

  return (
    <article id="portfolio" className="article-portfolio">
      <section className="article-portfolio__title">
        <h1 className="heading-one">Portfolio</h1>
      </section>
      <section className="article-portfolio__grid">
        {/* {projects.map((project, index) => (
          <Post key={index} project={project} />
        ))} */}
      </section>
    </article>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("projects"));

  console.log("files", files);

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
      projects,
    },
  };
}
