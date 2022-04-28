const menu = document.querySelector(".menu__hamburguer");

menu.addEventListener("click", function () {
  document.querySelector(".links").classList.toggle("active");
});
