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
      </div>
    </section>
  );
}
