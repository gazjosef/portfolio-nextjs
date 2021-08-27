import Link from "next/link";
import Image from "next/image";
import laptopPic from "../public/img/laptop.jpeg";

export default function Post() {
  return (
    <div className="posts">
      <Image
        src={laptopPic}
        alt=""
        height={420}
        width={600}
        className="post__image"
      />

      <div className="post__label">
        <span>19-07-21</span>
        <p>label</p>
      </div>

      <div className="post__description">
        <Link href={``}>
          <a>Post Title</a>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          reprehenderit.
        </p>
      </div>

      <div className="post__label+author">
        <Link href={``}>
          <a>Read More</a>
        </Link>
      </div>
    </div>
  );
}
