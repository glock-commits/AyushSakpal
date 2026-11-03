document.addEventListener("DOMContentLoaded", () => {
  if (
    typeof gsap === "undefined" ||
    typeof ScrollTrigger === "undefined" ||
    typeof ScrambleTextPlugin === "undefined"
  ) {
    console.error("Portfolio animations could not start: GSAP plugins are unavailable.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedMotion) {
    return;
  }

  const timeline = gsap.timeline();

  timeline
    .from(".right-hand", {
      duration: 2,
      rotation: 45,
      x: "100%",
    })
    .from(
      ".left-hand",
      {
        duration: 2,
        rotation: -45,
        x: "-100%",
      },
      "<",
    )
    .from(
      ".navbar .btn",
      {
        duration: 1.5,
        opacity: 0,
        ease: "expo.out",
      },
      "<",
    )
    .from(
      ".navbar .btn1",
      {
        duration: 1.5,
        opacity: 0,
        ease: "expo.out",
      },
      "<",
    )
    .to(".text h1", {
      duration: 1,
      scrambleText: {
        text: "Hi, I'm Glock",
        chars: "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",
        speed: 0.5,
        revealDelay: 0.1,
      },
    })
    .to(
      ".text p",
      {
        duration: 1.5,
        scrambleText: {
          text: "I build stuff",
          chars: "αβγδεζηθικλμνξοπρστυφχψω",
          speed: 0.3,
          revealDelay: 0.5,
        },
      },
      "-=0.6",
    );

  gsap.from(".card", {
  scrollTrigger: {
    trigger: ".card-container",
    toggleActions: "play reverse play reverse"
  },
  y: "250",
  opacity: "0",
  stagger : "0.3"
})

  gsap.from(".icon", {
    scrollTrigger: {
      trigger: ".icon",
      toggleActions: "play reverse play reverse",
    },
    x: "-100%",
    duration: 1.5,
    ease: "expo.out",
  });

  gsap.from(".hab", {
    scrollTrigger: {
      trigger: ".icon",
      toggleActions: "play reverse play reverse",
    },
    x: "-100%",
    duration: 1,
    ease: "expo.out",
    delay: 0.1,
  });

  if (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    typeof VanillaTilt !== "undefined"
  ) {
    VanillaTilt.init(document.querySelectorAll(".card"));
  }

  window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
  if (document.fonts) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
});
