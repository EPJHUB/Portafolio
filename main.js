import { setLanguage, setWelcomeText } from "./languageHandler.js";
const currentLanguage = localStorage.getItem("epj-portfolio-lan");
if (!currentLanguage){
  setLanguage("es");
}
else{
  setLanguage(currentLanguage);
}
// const welcomeTextArray = [
//   { text: "Hola mundo!!!", len: 12 },
//   { text: "Hola desarrollador", len: 16 },
//   { text: "Hola internauta", len: 13 },
// ];
let welcomeTextArray = setWelcomeText(currentLanguage)
const r = document.querySelector(":root");
let i = 0;
let inicio = false;
let lenValue = 0;
const typingText = document.getElementById("animated-text");
typingText.innerText = welcomeTextArray[i].text;
lenValue = welcomeTextArray[i].len;
r.style.setProperty("--animation-steps", `${lenValue}`);
r.style.setProperty("--characters", `${lenValue}ch`);
typingText.addEventListener("animationiteration", () => {
  if (inicio) {
    i >= 2 ? (i = 0) : i++;
    typingText.innerText = welcomeTextArray[i].text;
    lenValue = welcomeTextArray[i].len;
    r.style.setProperty("--animation-steps", `${lenValue}`);
    r.style.setProperty("--characters", `${lenValue}ch`);
    inicio = !inicio;
  } else {
    inicio = !inicio;
  }
});

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
  disableScrolling();
});

closeModal.addEventListener("click", () => {
  modal.close();
  enableScrolling();
});

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function () {};
}

const navBarMenu = document.querySelector(".mobile-menu");
const navBar = document.querySelector(".nav-bar");
const body = document.querySelector(".nav-bar").parentNode;
const envLogo = document.querySelector(".env-btn");
// Delegación de eventos
navBar.addEventListener("click", function (e) {
  if (e.target.closest(".env-btn")) {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      envLogo.innerHTML = `<i class='bx bxs-sun bx-md'></i>`;
    } else {
      envLogo.innerHTML = `<i class='bx bxs-moon bx-md'></i>`;
    }
  }
  if (e.target.closest(".menu-logo-container")) {
    navBarMenu.classList.remove("hide");
    navBarMenu.classList.toggle("slide-right");
  }
  if (e.target.closest(".close-menu-btn")) {
    navBarMenu.classList.toggle("slide-right");
  }
  if (e.target.closest(".lan-btn")) {
    const lanBtn = document.querySelector(".lan-btn");
    welcomeTextArray = setWelcomeText(lanBtn.innerText);
    setLanguage(lanBtn.innerText);
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    navBarMenu.classList.remove("show--menu");
  }
});

const SR = ScrollReveal();

SR.reveal(".animation-container", {
  duration: 1000,
  origin: "top",
  distance: "300px",
  // reset: true,
});

SR.reveal(".profile-img-container", {
  duration: 1000,
  origin: "bottom",
  distance: "300px",
  // reset: true,
});

SR.reveal(".hero-info", {
  duration: 1000,
  origin: "left",
  distance: "300px",
  // reset: true,
});

SR.reveal(".section-title", {
  duration: 1200,
  origin: "left",
  distance: "300px",
  // reset: true,
});

SR.reveal(".about-text", {
  duration: 1200,
  origin: "bottom",
  distance: "300px",
  // reset: true,
});

SR.reveal(".about-card .card-title", {
  duration: 1200,
  origin: "bottom",
  distance: "300px",
  // reset: true,
});

SR.reveal(".precepto-card p", {
  duration: 1200,
  origin: "top",
  distance: "300px",
  // reset: true,
});

SR.reveal(".precepto-card .card-title", {
  duration: 1200,
  origin: "top",
  distance: "300px",
  // reset: true,
});

SR.reveal(".timeline-edu-container", {
  duration: 1200,
  origin: "left",
  distance: "300px",
  // reset: true,
});
SR.reveal(".timeline-exp-container", {
  duration: 1200,
  origin: "right",
  distance: "300px",
  // reset: true,
});

SR.reveal(".project-card:nth-child(even)", {
  duration: 1200,
  origin: "left",
  distance: "300px",
  // reset: true,
});

SR.reveal(".project-card:nth-child(odd)", {
  duration: 1200,
  origin: "right",
  distance: "300px",
  // reset: true,
});

SR.reveal(".skillset-container", {
  duration: 1200,
  origin: "bottom",
  distance: "300px",
  // reset: true,
});

SR.reveal(".contact-form", {
  duration: 1200,
  origin: "bottom",
  distance: "300px",
  // reset: true,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
