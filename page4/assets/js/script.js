/*=============== NAV ===============*/
const boton = document.querySelector("#hamburger");
boton.addEventListener("click", (e) => {
  document.getElementById("nav-menu").classList.toggle("mostrar");
  document.getElementById("hamburger").classList.toggle("bx-x");
});


/*=============== ATROPOS EFFECT ===============*/
// Initialize
const myAtropos = Atropos({
  el: '.home__img',
  shadow: false,
  highlight: false
});