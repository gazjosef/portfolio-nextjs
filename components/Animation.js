import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const gsapFadeIn = (ref, delay) => {
  const el = ref.current;
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: -100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: delay,
      ease: "power2",
      scrollTrigger: {
        trigger: el,
        // markers: {
        //   startColor: "purple",
        //   endColor: "fuchsia",
        //   fontSize: "3rem",
        // },
      },
    }
  );
};

// TODO: gsapFadeLeft

export const gsapFadeLeft = (ref, delay) => {
  const el = ref.current;
  gsap.fromTo(
    el,
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: delay,
      ease: "power2",
      scrollTrigger: {
        trigger: el,
        // markers: {
        //   startColor: "purple",
        //   endColor: "fuchsia",
        //   fontSize: "3rem",
        // },
      },
    }
  );
};

// TODO: gsapFadeRight

export const gsapFadeRight = (ref, delay) => {
  const el = ref.current;
  gsap.fromTo(
    el,
    {
      opacity: 0,
      x: 100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: delay,
      ease: "power2",
      scrollTrigger: {
        trigger: el,
        // markers: {
        //   startColor: "purple",
        //   endColor: "fuchsia",
        //   fontSize: "3rem",
        // },
      },
    }
  );
};
