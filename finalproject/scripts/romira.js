document.addEventListener("DOMContentLoaded", () => {
  const catalog = document.getElementById("catalog");
  const modal = document.getElementById("modal-backdrop");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.getElementById("close-modal");

  if (catalog) {
    // Fetch the JSON file, to retrive data from external file
    fetch("data/products.json")
      .then(res => res.json())
      .then(data => {
        // Stored the fetched files in localStorage 
        localStorage.setItem("romiraProducts", JSON.stringify(data));

        // To create product cards and templates, each card displays img, name, price category for the 15 items
        catalog.innerHTML = data.map(item => `
          <div class="card">
            <img src="${item.image}" alt="${item.alt}" loading="lazy" width="300" height="300">
            <h3>${item.name}</h3>
            <p>Price: ${item.price} ${item.currency}</p>
            <p>Category: ${item.category}</p>
            <button data-id="${item.id}">Details</button>
          </div>
        `).join("");

        // I implemented modal functionality to open a product detail when clicked
        catalog.querySelectorAll("button").forEach(btn => {
          btn.addEventListener("click", e => {
            const product = data.find(p => p.id === e.target.dataset.id);
            modalBody.innerHTML = `
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <p>Stock: ${product.stock}</p>
              <p>Rating: ${product.rating} ⭐</p>
            `;
            modal.classList.add("open");
          });
        });
      });

    // Close modal
    closeBtn.addEventListener("click", () => modal.classList.remove("open"));
  }
});
   // i used DOM manipulation, to provide a toggle menu
  document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.querySelector("header nav");

  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});

   // i made this change to explore the features button to scroll to the features section
  document.addEventListener("DOMContentLoaded", () => {
  const exploreBtn = document.getElementById("explore-features-btn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      window.location.href = "features.html";
    });
  }
});

 
    // i used this to display the current year and lastmodified in the footer
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


// Escape HTML to prevent unsafe injection
function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}

function renderSubmittedData() {
  const params = new URLSearchParams(window.location.search);
  const output = document.getElementById('output');
  output.innerHTML = Array.from(params.entries())
    .map(([k, v]) => `<dt>${escapeHTML(k)}</dt><dd>${escapeHTML(v)}</dd>`)
    .join('');
}

function setFooterMeta() {
  const yearEl = document.getElementById('currentyear');
  const modEl = document.getElementById('lastModified');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (modEl) modEl.textContent = `Last modified: ${document.lastModified}`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderSubmittedData();
  setFooterMeta();
});



