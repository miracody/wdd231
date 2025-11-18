const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = "Last Modification: " + document.lastModified;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("submittedData");
  if (output) {
    const params = new URLSearchParams(window.location.search);

    output.innerHTML = `
      <p><strong>First Name:</strong> ${params.get("firstName") || ""}</p>
      <p><strong>Last Name:</strong> ${params.get("lastName") || ""}</p>
      <p><strong>Email:</strong> ${params.get("email") || ""}</p>
      <p><strong>Mobile Number:</strong> ${params.get("phone") || ""}</p>
      <p><strong>Business Name:</strong> ${params.get("organization") || ""}</p>
      <p><strong>Submitted On:</strong> ${params.get("timestamp") || ""}</p>
    `;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("timestamp").value = new Date().toISOString();
});


