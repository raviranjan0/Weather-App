let key = "c73f426d1a09ed1ff43c9eb0ee969b20"; // Replace with your actual API key
let Cityinput = document.getElementById("Cityinput");
let btn = document.getElementById("search-btn");
let city = document.getElementById("city-name");
let weatherInfoCard = document.getElementById("weather-info");
let temperature = document.getElementById("temperature");
let descriptions = document.getElementById("descriptions");
let errorMessage = document.getElementById("error-message");
let icon = document.getElementById("weather-icon");

btn.addEventListener("click", () => {
  console.log("Search button clicked!"); // Debugging
  const city = Cityinput.value;
  if (city) {
    getWeather(city);
  } else {
    console.log("No city entered!"); // Debugging
  }
});


async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    );
    const data = await response.json();

    if (response.ok) {
      displayWeather(data);
    } else {
      showError(data.message);
    }
  } catch (error) {
    showError("Unable to fetch weather data. Please try again later.");
    console.error(error);
  }
}

function displayWeather(data) {
  city.textContent = `${data.name}, ${data.sys.country}`;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  descriptions.textContent = `${data.weather[0].description.toUpperCase()}`;

  const iconCode = data.weather[0].icon;
  icon.style.backgroundImage = `url(https://openweathermap.org/img/wn/${iconCode}@2x.png)`;

  weatherInfoCard.style.display = "block";
  errorMessage.textContent = "";
}

function showError(message) {
  errorMessage.textContent = message;
  weatherInfoCard.style.display = "none";
}
