window.addEventListener("scroll", () => {
  let navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("sticky", window.scrollY > 0);
});
 