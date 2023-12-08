const nave = document.querySelector(".nave");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    nave.classList.add("scroll");
  } else {
    nave.classList.remove("scroll");
  }
});
