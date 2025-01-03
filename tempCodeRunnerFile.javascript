let city = document.getElementById("city-name");
let weatherInfoCard = document.getElementById("weather-info");
console.log(weatherInfoCard);
let temperature = document.getElementById("temperature");
let descriptions = document.getElementById("descriptions");
let errorMessage = document.getElementById("error-message");
let icon = document.getElementById("weather-icon");
console.log(icon);

let btn = document.getElementById("btn"); // Assuming the button has an id of 'btn'
let Cityinput = document.getElementById("city-input"); // Assuming the input field has an id of 'city-input'

btn.addEventListener("click", () => {
  const city = Cityinput.value;
  if (city) {
    getWeather(city);
  }
});

async function getWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c73f426d1a09ed1ff43c9eb0ee969b20&units=metric`
  );
  const data = await response.json();
  // Handle the response data here
}