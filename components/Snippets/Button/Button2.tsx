import { FaArrowDown } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { Button } from "./Button.styles";
// Animation
import gsap from "gsap";
import { animateButton } from "./Button.animation";

export default function Button2() {
  const buttonRef = useRef(null);

  useEffect(() => {
    animateButton(buttonRef);
  }, []);

  return (
    <Button
      ref={buttonRef}
      href="#portfolio"
      onMouseEnter={() =>
        gsap.to(buttonRef.current, { scale: 1.1, duration: 0.2 })
      }
      onMouseLeave={() =>
        gsap.to(buttonRef.current, { scale: 1, duration: 0.2 })
      }
      onMouseDown={() =>
        gsap.to(buttonRef.current, { scale: 0.95, duration: 0.1 })
      }
      onMouseUp={() =>
        gsap.to(buttonRef.current, { scale: 1.1, duration: 0.1 })
      }
    >
      See My Work <FaArrowDown />
    </Button>
  );
}
