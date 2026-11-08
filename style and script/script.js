document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, DrawSVGPlugin);

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

    .from(
      ".btn, .btn1",
      {
        duration: 2.5,
        y: "-100%",
        ease: "expo.out",
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
        duration: 1.5,
        ease: "none",
      },
      0,
    )
    .to(
      ".left-hand",
      {
        xPercent: -110,
        duration: 1.5,
        ease: "none",
      },
      0,
    )
    .to(
      ".navbar, .text",
      {
        opacity: 0,
        y: -30,
        duration: 1,
      },
      0,
    );

  ScrollTrigger.create({
    trigger: ".top",
    start: "top top",
    end: "150%",
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

  const aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".abt-section1",
      start: "top top",
      end: "+=250%",
      pin: true,
      scrub: true,
    },
  });

  aboutTl
  .to(
      ".hab",
      {
        duration: 1.5,
        scrambleText: {
          text: "About HIM",
          chars: "αβγδεζηθικλμνξοπρστυφχψω",
          speed: 0.3,
          revealDelay: 0,
        },
      },
    )
    .from(".fucking-box path", {
      drawSVG: "0%",
      duration: 1.5,
      ease: "power2.out",
    }, "<")
    .fromTo(
      ".icon",
      {
        opacity: 0,
        filter: "blur(50px) contrast(1)",
      },
      {
        opacity: 1,
        filter: "blur(0px) contrast(1)",
        duration: 0.5,
        ease: "power2.out",
      },
      "<",
    )
     .to(".abt-section1", {
      scale: 0.1,
      opacity: 0,            
      filter: "blur(10px)", 
      transformOrigin: "center center", 
      duration: 1.5,
      ease: "power2.inOut",
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
