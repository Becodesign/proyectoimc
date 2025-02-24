const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    document.getElementById("hamburger").classList.toggle("bx-x");

});

document.addEventListener("scroll", () => {
    document.getElementById("hamburger").classList.remove("bx-x");
    nav.classList.remove('open');
})