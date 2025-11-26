
 import { items } from "../data/items.mjs";

const container = document.querySelector(".discover-grid");

items.forEach((item, index) => {
  const card = document.createElement("article");
  card.classList.add("card", `card${index+1}`);
  card.innerHTML = `
    <h2 class="name">${item.name}</h2>
    <figure class="photograph"><img src="${item.image}" alt="${item.name}"></figure>
    <address class="location">${item.address}</address>
    <p class="description">${item.description}</p>
    <button aria-label="Learn more about ${item.name}">Learn more</button>
  `;
  container.appendChild(card);
});

// LocalStorage visit tracker
const messageArea = document.querySelector("#visit-message");
const lastVisit = Number(localStorage.getItem("lastVisit"));
const now = Date.now();

if (!lastVisit) {
  messageArea.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  messageArea.textContent =
    days < 1 ? "Back so soon! Awesome!" :
    `You last visited ${days} day${days === 1 ? "" : "s"} ago.`;
}

localStorage.setItem("lastVisit", now);

// Hamburger toggle for mobile navigation
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }
});

