document.addEventListener("DOMContentLoaded", () => {
  if (
    typeof gsap === "undefined" ||
    typeof ScrollTrigger === "undefined" ||
    typeof ScrambleTextPlugin === "undefined"
  ) {
    console.error(
      "Portfolio animations could not start: GSAP plugins are unavailable.",
    );
    return;
  }

  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedMotion) {
    return;
  }

  const tl = gsap.timeline();

  tl.from(".right-hand", {
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

    .call(() => {
      gsap.set(".right-hand", { transformOrigin: "right center" });
      gsap.set(".left-hand", { transformOrigin: "left center" });

      gsap.to(".right-hand", {
        x: 10,
        y: -15,
        rotation: 5,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.5,
      });
      gsap.to(".left-hand", {
        x: -10,
        y: 15,
        rotation: 5,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    })

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

  const outroTl = gsap.timeline();

  outroTl
    .to(
      ".right-hand",
      {
        xPercent: 110,
        duration: 1,
        ease: "none",
      },
      0,
    )
    .to(
      ".left-hand",
      {
        xPercent: -110,
        duration: 1,
        ease: "none",
      },
      0,
    )
    .to(".navbar, .text", {
      opacity: 0,
      y: -30,
      duration: 1,
    }, 0);

  ScrollTrigger.create({
    trigger: ".top",
    start: "top top",
    end: "+=1200",
    pin: true,
    scrub: 1,
    animation: outroTl,
  });

  gsap.from(".card", {
    scrollTrigger: {
      trigger: ".card-container",
      toggleActions: "play reverse play reverse",
    },
    y: "250",
    duration: 1.5,
    opacity: "0",
    stagger: "0.3",
  });

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

  window.addEventListener("load", () => ScrollTrigger.refresh(), {
    once: true,
  });
  if (document.fonts) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
});
