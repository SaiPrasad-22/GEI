// Menu Toggle and Navbar
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", function (e) {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  if (isOpen) {
    menuBtnIcon.setAttribute("class", "ri-close-line");
  } else {
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

navLinks.addEventListener("click", function (e) {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Pre-Loader

// window.addEventListener("load", function () {
//   const preloader = document.getElementById("preloader");
//   setTimeout(() => {
//     preloader.classList.add("hidden");
//   }, 2500); 
// });

// ScrollReveal Animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__links", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".service__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 100,
});

ScrollReveal().reveal(".experience__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".download__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".download__links", {
  ...scrollRevealOption,
  delay: 1500,
});

// Scroll to Top Script
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#1a70bc ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};  

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;




