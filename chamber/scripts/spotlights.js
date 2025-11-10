const spotlightContainer = document.getElementById("spotlight-container");
const memberDataURL = "data/members.json"; // adjust path if needed

function getRandomSpotlights(members, count = 3) {
  const eligible = members.filter(member =>
    member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
  );

  const shuffled = eligible.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function createSpotlightCard(member) {
  const card = document.createElement("div");
  card.classList.add("spotlight-card");

  card.innerHTML = `
    <img src="${member.image}" alt="${member.name} logo" loading="lazy" />
    <h3>${member.name}</h3>
    <p><em>${member.category}</em></p>
    <p><strong>Phone:</strong> ${member.phone}</p>
    <p><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
    <p class="badge ${member.membershipLevel.toLowerCase()}">${member.membershipLevel} Member</p>
  `;

  return card;
}

async function loadSpotlights() {
  try {
    const response = await fetch(memberDataURL);
    const members = await response.json();
    const spotlights = getRandomSpotlights(members, 3);

    spotlights.forEach(member => {
      const card = createSpotlightCard(member);
      spotlightContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading spotlight members:", error);
    spotlightContainer.innerHTML = "<p>Unable to load spotlights at this time.</p>";
  }
}

loadSpotlights();
