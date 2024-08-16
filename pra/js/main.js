/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__img-1", { duration: 10, y: -120 });

let tl1 = gsap.timeline();
tl1
  .from(".home__img-2", {
    duration: 1,
    x: -40,
    y: -50,
    rotation: 32,
    scale: 0.5,
  })
  .to(".home__img-2", { duration: 2, rotation: 45, scale: 1.2 })
  .to(".home__img-2", { duration: 3, rotation: 0, scale: 1 });

let tl2 = gsap.timeline();
tl2
  .from(".home__img-3", {
    duration: 1,
    x: 50,
    y: -50,
    rotation: 30,
  })
  .to(".home__img-3", { duration: 8, rotation: 360 });

gsap.from(".home__img-4", { duration: 5, y: -100, scale: 1.3 });
gsap.from(".home__img-5", { duration: 6, y: 200, rotation: 30 });
