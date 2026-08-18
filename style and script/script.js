const observer = new IntersectionObserver ((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log(entry.target)
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        };
    });
});
const elementsToObserve = document.querySelectorAll(".para1, .card-container, .para2, #card1, #card2"
);
elementsToObserve.forEach(el => observer.observe(el));

const navButtons = document.querySelectorAll('.navbar button');

VanillaTilt.init(document.querySelectorAll(".card"));

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.id;
    const targetClass = targetId === 'skills' ? '.skill-container' : `.${targetId}`;
    const targetSection = document.querySelector(targetClass);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});