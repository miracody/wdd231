document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  
  const detailsBtn = document.getElementById("details-btn");
  if (detailsBtn) {
    detailsBtn.addEventListener("click", () => {
      
      alert("Showing details!");
    });
  }
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


document.getElementById("np-info").addEventListener("click", () => {
  alert("NP Membership includes community events and recognition.");
});

document.getElementById("bronze-info").addEventListener("click", () => {
  alert("Bronze Membership includes directory listing and networking events.");
});

document.getElementById("silver-info").addEventListener("click", () => {
  alert("Silver Membership includes advertising and event discounts.");
});

document.getElementById("gold-info").addEventListener("click", () => {
  alert("Gold Membership includes premium spotlight and sponsorships.");
});


