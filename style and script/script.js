document.addEventListener("DOMContentLoaded", async () => {
  await document.fonts.ready;

  gsap.registerPlugin(
    CustomEase,
    ScrollTrigger,
    ScrollToPlugin,
    TextPlugin,
    SplitText,
    ScrambleTextPlugin
  );

  let splitH1 = new SplitText(".text h1", { type: "chars" });
  let splitP = new SplitText(".text p", { type: "chars" });

  gsap.ticker.lagSmoothing(0);

  const tl = gsap.timeline();

  tl.from(".right-hand", {
    duration: 2,
    rotation: "45",
    x: "100%",
  })

    .from(
      ".left-hand",
      {
        duration: 2,
        rotation: "-45",
        x: "-100%",
      },
      "<",
    )

    .from(
      ".btn",
      {
        duration: 1.5,
        opacity: 0,
        ease: "expo.out",
      },
      "<",
    )

    .from(
      ".btn1",
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
      toggleActions: "play reverse play reverse",
    },
    y: "250",
    opacity: "0",
    stagger: "0.3",
  });

  gsap.from(".icon", {
    scrollTrigger: {
      trigger: ".icon",
      toggleActions: "play reverse play reverse",
    },
    x: "-100%",
    duration: "0.5",
    ease: "expo.out)",
  });

  gsap.from(".hab", {
    scrollTrigger: {
      trigger: ".hab",
      toggleActions: "play reverse play reverse",
    },
    x: "-200%",
    duration: "1",
    ease: "expo.out",
  });

  VanillaTilt.init(document.querySelectorAll(".card"));
});