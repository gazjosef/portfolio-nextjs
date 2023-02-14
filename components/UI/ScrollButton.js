import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaArrowCircleUp } from "react-icons/fa";

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <button className="scrollButton">
      <IconContext.Provider value={{ className: "scrollButton__icon" }}>
        <FaArrowCircleUp
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </IconContext.Provider>
    </button>
  );
}

export default ScrollButton;
