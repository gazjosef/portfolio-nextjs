import { FaArrowCircleDown } from "react-icons/fa";

interface ButtonProps {
  title: string;
  styles: string;
  href: string;
}

export default function Button({ title, styles, href }: ButtonProps) {
  return (
    <button className={`btn ${styles}`}>
      <a href={href} className="u-flex u-items-center u-justify-center u-gap-1">
        {title}
        <FaArrowCircleDown />
      </a>
    </button>
  );
}
