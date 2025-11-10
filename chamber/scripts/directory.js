// DOM elements
const directory = document.getElementById('directory');
const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');


if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

if (gridBtn && listBtn && directory) {
  gridBtn.addEventListener('click', () => {
    directory.classList.add('grid-view');
    directory.classList.remove('list-view');
  });

  listBtn.addEventListener('click', () => {
    directory.classList.add('list-view');
    directory.classList.remove('grid-view');
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const currentYearEl = document.getElementById("currentyear");
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
  const lastModifiedEl = document.getElementById("lastModified");
  if (lastModifiedEl) {
    lastModifiedEl.textContent = document.lastModified;
  }
});



async function getMembers() {
  try {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error('Error loading member data:', error);
    directory.innerHTML = '<p>Unable to load member data.</p>';
  }
}

// Render member cards
function displayMembers(members) {
  directory.innerHTML = '';
  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('card');

    const level = getMembershipLevel(member.membership);
    const badge = getMembershipBadge(level);

    card.innerHTML = `
  <img src="${member.image}" alt="logo">
  <h3>${member.name}</h3>
  <p>${member.category}</p>
  <p>Email: ${member.email}</p>
  <p>Phone: ${member.phone}</p>
  <p><a href="${member.website}" target="_blank">Visit Website</a></p>
  <p class="membership ${level}">${badge} ${capitalize(level)} Member</p>
`;


    directory.appendChild(card);
  });
}

// Helpers
function getMembershipLevel(code) {
  if (code === 3) return 'gold';
  if (code === 2) return 'silver';
  return 'regular';
}

function getMembershipBadge(level) {
  if (level === 'gold') return '🥇';
  if (level === 'silver') return '🥈';
  return '🔰';
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Initialize
if (directory) {
  getMembers();
}
