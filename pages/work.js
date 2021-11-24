import fs from "fs";
import path from "path";
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

  console.log(files);

  return {
    props: {},
  };
}
