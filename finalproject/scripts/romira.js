document.addEventListener("DOMContentLoaded", () => {
  const catalog = document.getElementById("catalog");
  const modal = document.getElementById("modal-backdrop");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.getElementById("close-modal");

  if (catalog) {
    // Fetch the JSON file
    fetch("data/products.json")
      .then(res => res.json())
      .then(data => {
        // Store in localStorage (lesson requirement)
        localStorage.setItem("romiraProducts", JSON.stringify(data));

        // Render product cards
        catalog.innerHTML = data.map(item => `
          <div class="card">
            <img src="${item.image}" alt="${item.alt}" loading="lazy" width="300" height="300">
            <h3>${item.name}</h3>
            <p>Price: ${item.price} ${item.currency}</p>
            <p>Category: ${item.category}</p>
            <button data-id="${item.id}">Details</button>
          </div>
        `).join("");

        // Add modal functionality
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

  document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.querySelector("header nav");

  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});


