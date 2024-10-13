// ====================   header efects  ====================

document.addEventListener("scroll", (e) => {
  if (window.scrollY === 0) {
    document.getElementById("header").classList.remove("header-scroll");
  } else {
    document.getElementById("header").classList.add("header-scroll");
  }
});

// ====================  menu navegación simple  ====================

// let menu = document.querySelector("#menu-bar");
// let navbar = document.querySelector(".navbar");

// menu.onclick = () => {
//   menu.classList.toggle("fa-times");
//   navbar.classList.toggle("nav-toggle");
// };

// window.onscroll = () => {
//   menu.classList.remove("fa-times");
//   navbar.classList.remove("nav-toggle");
// };

// ==================== our delicious menu ====================
const menuList = document.querySelectorAll(".list .btn");
menuList.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".list .btn.active").classList.remove("active");
    item.classList.add("active");

    let src = item.getAttribute("data-src");
    document.querySelector(".menu .row .image img").src = src;
  });
});

// ====================  menu navegación activo  ====================

let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("nav-toggle");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("nav-toggle");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// ====================  scrollup  ====================
document.addEventListener("scroll", (e) => {
  if (window.scrollY > 500) {
    document.getElementById("scrollup").classList.add("show");
  } else {
    document.getElementById("scrollup").classList.remove("show");
  }
});
