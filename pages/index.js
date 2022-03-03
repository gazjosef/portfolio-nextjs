import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Post from "@/components/Post";
import Image from "next/image";

export default function Home({ projects }) {
  console.log(projects);
  return (
    <>
      <article className="article-home">
        <section className="article-home__text">
          <h1 className="heading-home">Hi, my name is Gareth</h1>
          <h2 className="heading-two">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            similique quia sunt soluta porro illum?
          </h2>
          <div>
            <button className="btn btn--home">Story</button>
            <button className="btn btn--home">Portfoloio</button>
          </div>
        </section>
        <section className="article-home__image">
          <Image
            src="/images/article/undraw_developer_activity_re_39tg.svg"
            alt="responsive"
            width={500}
            height={350}
          />
        </section>
      </article>

      <article className="article-story">
        <section className="article-story__title">
          <h1 className="heading-one">Story</h1>
        </section>
        <section className="article-story__image">
          <Image
            src="/images/article/undraw_programming_re_kg9v.svg"
            alt="responsive"
            width={500}
            height={350}
          />
        </section>
        <section className="article-story__text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            aliquid nemo hic officiis ducimus magnam, quisquam pariatur quod
            tempore corrupti est similique, culpa incidunt. Velit, nemo? Rerum
            ab, consequatur maiores perferendis necessitatibus similique fugiat
            quasi, alias cupiditate sapiente culpa distinctio.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            tempore voluptatibus itaque magni consectetur commodi temporibus
            rem! Incidunt unde commodi velit. Libero odio non vitae eum vero at
            eos aspernatur dignissimos magnam repudiandae saepe, minus,
            voluptatibus dolorem ducimus veritatis perspiciatis?
          </p>
        </section>
      </article>

      <article className="article-portfolio">
        <section className="article-portfolio__title">
          <h1 className="heading-one">Portfolio</h1>
        </section>
        <section className="article-portfolio__grid">
          {projects.map((project, index) => (
            <Post key={index} project={project} />
          ))}
        </section>
        <section className="article-portfolio__aside">Aside</section>
      </article>

      <article className="article-contact">
        <section className="article-contact__title">
          <h1 className="heading-one">Contact</h1>
        </section>
        <section className="article-contact__image">
          <Image
            src="/images/article/undraw_profile_re_4a55.svg"
            alt="responsive"
            width={500}
            height={350}
          />
        </section>
        <section className="article-contact__details">
          <div className="article-contact__text">
            <ul>
              <li>
                <FaEnvelope /> Email
              </li>
              <li>
                <a href="">garethjhind@gmail.com</a>
              </li>
              <br />
              <li>
                <FaGithub /> Github
              </li>
              <li>
                <a href="">https://github.com/gazjosef</a>
              </li>
              <br />
              <li>
                <FaLinkedin /> LinkedIn
              </li>
              <li>
                <a href="">https://www.linkedin.com</a>
              </li>
            </ul>
          </div>
        </section>
      </article>
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
      projects,
    },
  };
}
