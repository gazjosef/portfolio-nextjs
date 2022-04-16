import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  FaArrowCircleRight,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Post from "@/components/Post";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home({ projects }) {
  return (
    <>
      <article id="home" className="article-home">
        <section className="article-home__text">
          <div>
            <h1 className="heading-home">
              Hi, I&apos;m Gareth. I&apos;m a <span>Web Dev</span>.
            </h1>
            <p className="paragraph">
              I spend my time, night and day, coding front-end websites and
              back-end databases.
            </p>
            <button className="btn btn--cta">
              <a href="#portfolio" className="align-items">
                Portfoloio
                <FaArrowCircleRight className="align-items__arrow" />
              </a>
            </button>
          </div>
        </section>
        <section className="article-home__image">
          <Image
            src="/images/section/undraw_developer_activity_re_39tg.svg"
            alt="responsive"
            width={500}
            height={350}
          />
        </section>
      </article>

      <article id="story" className="article-story">
        <section className="article-story__title">
          <h1 className="heading-one">Story</h1>
        </section>
        <motion.section
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="article-story__image"
        >
          <Image
            src="/images/section/undraw_programming_re_kg9v.svg"
            alt="responsive"
            width={500}
            height={350}
          />
        </motion.section>
        <section className="article-story__text">
          <p className="paragraph">
            I&apos;m a developer from Sydney, Australia. I&apos;ve been
            programming for over five years, mainly focusing on front-end
            projects.
          </p>

          <p className="paragraph">
            In this time, I&apos;ve learnt an array of programming languages,
            frameworks and libraries and continue to learn the latest trends and
            web technologies.
          </p>

          <p className="paragraph">Please check out my portfolio!</p>
        </section>
      </article>

      <article id="portfolio" className="article-portfolio">
        <section className="article-portfolio__title">
          <h1 className="heading-one">Portfolio</h1>
        </section>
        <section className="article-portfolio__grid">
          {projects.map((project, index) => (
            <Post key={index} project={project} />
          ))}
        </section>
      </article>

      <article id="contact" className="article-contact">
        <section className="article-contact__title">
          <h1 className="heading-one">Contact</h1>
        </section>

        <section className="article-contact__image">
          <Image
            src="/images/section/undraw_profile_re_4a55.svg"
            alt="responsive"
            width={400}
            height={280}
          />
        </section>

        <section className="article-contact__details">
          <div className="article-contact__details--phone">
            <h3 className="heading-three align-items">
              <FaPhone className="align-items__icon" /> Mobile
            </h3>
            <p className="paragraph">0402 830 315</p>
          </div>

          <div className="article-contact__details--email">
            <h3 className="heading-three align-items">
              <FaEnvelope className="align-items__icon" /> Email
            </h3>
            <p className="paragraph">garethjhind@gmail.com</p>
          </div>

          <div className="article-contact__details--github">
            <h3 className="heading-three align-items">
              <FaGithub className="align-items__icon" /> Github
            </h3>
            <p className="paragraph">
              <a href="https://github.com/gazjosef">
                https://github.com/gazjosef
              </a>
            </p>
          </div>

          <div className="article-contact__details--linkedIn">
            <h3 className="heading-three align-items">
              <FaLinkedin className="align-items__icon" /> LinkedIn
            </h3>
            <p className="paragraph">
              <a href="https://www.linkedin.com/in/gareth-h-a32448191/">
                https://www.linkedin.com/in/gareth-h-a32448191/
              </a>
            </p>
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
