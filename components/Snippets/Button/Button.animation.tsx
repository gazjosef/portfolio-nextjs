import gsap from "gsap";
import { MutableRefObject } from "react";

export const animateButton = (
  buttonRef: MutableRefObject<HTMLButtonElement | null>
): void => {
  if (!buttonRef.current) return;

  gsap.fromTo(
    buttonRef.current,
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
  );
};
