const apiKey = "4362133b9a13a070c27e10c56f3fa7bb"; // Replace with your actual OpenWeatherMap API key
const lat = -8.8383; // Latitude for Luanda
const lon = 13.2344; // Longitude for Luanda

const currentWeatherEl = document.getElementById("current-weather");
const forecastEl = document.getElementById("forecast");

async function fetchWeather() {
  try {
    const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const [currentRes, forecastRes] = await Promise.all([
      fetch(currentURL),
      fetch(forecastURL)
    ]);

    const currentData = await currentRes.json();
    const forecastData = await forecastRes.json();

    displayCurrentWeather(currentData);
    displayForecast(forecastData);
  } catch (error) {
    console.error("Weather fetch error:", error);
    currentWeatherEl.innerHTML = "<p>Unable to load weather data.</p>";
    forecastEl.innerHTML = "<p>Unable to load forecast.</p>";
  }
}

function displayCurrentWeather(data) {
  const temp = Math.round(data.main.temp);
  const desc = data.weather[0].description;
  const high = Math.round(data.main.temp_max);
  const low = Math.round(data.main.temp_min);
  const humidity = data.main.humidity;
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-AO", { hour: "2-digit", minute: "2-digit" });
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-AO", { hour: "2-digit", minute: "2-digit" });

  currentWeatherEl.innerHTML = `
    <div class="weather-icon">🌤</div>
    <p>${temp}°C | ${desc}</p>
    <p>High: ${high}°C | Low: ${low}°C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Sunrise: ${sunrise} | Sunset: ${sunset}</p>
  `;
}

function displayForecast(data) {
  const today = new Date().getDate();
  const dailyTemps = {};

  data.list.forEach(entry => {
    const date = new Date(entry.dt * 1000);
    const day = date.toLocaleDateString("en-AO", { weekday: "long" });
    const dayNum = date.getDate();

    if (dayNum !== today && !dailyTemps[day]) {
      dailyTemps[day] = Math.round(entry.main.temp);
    }
  });

  const forecastHTML = Object.entries(dailyTemps)
    .slice(0, 3)
    .map(([day, temp]) => `<li>${day}: ${temp}°C</li>`)
    .join("");

  forecastEl.innerHTML = `<ul>${forecastHTML}</ul>`;
}

fetchWeather();
