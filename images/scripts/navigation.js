const hamburger = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});


const currentPage = location.pathname.split("/").pop();
document.querySelectorAll("#mainNav a").forEach(link => {
  if (link.getAttribute("href").includes(currentPage)) {
    link.classList.add("active");
  }
});
