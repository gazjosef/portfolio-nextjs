import { FaGithub, FaLinkedin } from "react-icons/fa";

import Image from "next/image";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <article className="article-home">
        <section className="article-home__text">
          <h1 className="heading-home">Hi, my name is Gareth</h1>
          <h2 className="heading-two">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            similique quia sunt soluta porro illum?
          </h2>
          <button className="btn">Story</button>
          <button className="btn">Portfoloio</button>
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

      {/* <article className="article-portfolio">
      </article> */}
      <Portfolio />

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
