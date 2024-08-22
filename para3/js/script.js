// ==================== SCROLLUP ====================
document.addEventListener("scroll", (e) => {
  if (window.scrollY > 500) {
    document.getElementById("scrollup").classList.add("mostrar");
  } else {
    document.getElementById("scrollup").classList.remove("mostrar");
  }
});

// ==================== HAMBURGER MENU ====================
const boton = document.querySelector("#hamburger");
boton.addEventListener("click", (e) => {
  document.getElementById("nav-menu").classList.toggle("mostrar");
  document.getElementById("hamburger").classList.toggle("bx-x");
});
