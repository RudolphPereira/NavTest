const nav = document.querySelector(".nav__links");
const burger = document.querySelector(".burger");
const close = document.querySelector(".close");

burger.addEventListener("click", () => {
  nav.classList.add("nav-active");
});

close.addEventListener("click", () => {
  nav.classList.remove("nav-active");
});
