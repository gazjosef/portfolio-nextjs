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

export default function Home({ projects }) {
  return (
    <>
      <article id="home" className="article-home">
        <section className="article-home__text">
          <div>
            <h1 className="heading-home">Hi, my name is Gareth</h1>
            <p className="heading-two">
              I'm a web designer and web developer. I spend my days with my
              hands in many different areas of web development from front-end
              engineering to back end programming.
            </p>
            <div className="btns">
              <button className="btn">
                <a href="#story" className="align-items">
                  Story <FaArrowCircleRight className="align-items__arrow" />
                </a>
              </button>
              <button className="btn btn--cta">
                <a href="#portfolio" className="align-items">
                  Portfoloio
                  <FaArrowCircleRight className="align-items__arrow" />
                </a>
              </button>
            </div>
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

      <article id="story" className="article-story">
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
            src="/images/article/undraw_profile_re_4a55.svg"
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
            <p>0402 830 315</p>
          </div>

          <div className="article-contact__details--email">
            <h3 className="heading-three align-items">
              <FaEnvelope className="align-items__icon" /> Email
            </h3>
            <p>garethjhind@gmail.com</p>
          </div>

          <div className="article-contact__details--github">
            <h3 className="heading-three align-items">
              <FaGithub className="align-items__icon" /> Github
            </h3>
            <p>
              <a href="">https://github.com/gazjosef</a>
            </p>
          </div>

          <div className="article-contact__details--linkedIn">
            <h3 className="heading-three align-items">
              <FaLinkedin className="align-items__icon" /> LinkedIn
            </h3>
            <p>
              <a href="">https://www.linkedin.com</a>
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
