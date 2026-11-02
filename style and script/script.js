VanillaTilt.init(document.querySelectorAll(".card"));

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin, SplitText, ScrambleTextPlugin);

let splitH1 = new SplitText(".text h1", { type: "chars" });
let splitP = new SplitText(".text p", { type: "chars" });

const tl = gsap.timeline();

tl.from(".right-hand", {
  duration: 2,
  rotation: "45",
  x: "100%",
  ease: "eastic.out"
})

.from(".left-hand", {
  duration: 2,
  rotation: "-45",
  x: "-100%",
  ease: "eastic.out"
}, "<")

.from(".btn", {
  duration: 1,
  x: "-100%",
  ease: 'expo.out',
}, "<")

.from(".btn1", {
  duration: 1,
  x: "100%",
  ease: "expo.out",
}, "<")

.to(".text h1", {
  duration: 2,
  scrambleText: {
    text: "Hi, I'm Glock",
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    speed: 0.5,
    revealDelay: 0.1
  }
})

.to(".text p", {
  duration: 1.2,
  scrambleText: {
    text: "I build stuff",
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    speed: 0.3,
    revealDelay: 0.5
  }
}, "-=0.6");

gsap.from(".card", {
  scrollTrigger: {
    trigger: ".card-container",
    toggleActions: "play reverse play reverse"
  },
  y: "250",
  opacity: "0",
  stagger : "0.3"
})