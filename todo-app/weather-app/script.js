const apiKey = 'd7abc2a1483c6f0a3e24e70a9dda374b';  // Clé API OpenWeatherMap
const weatherInfo = document.getElementById('weather-info');
const getWeatherBtn = document.getElementById('get-weather-btn');
const cityInput = document.getElementById('city-input');

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeather(city);
    }
});

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            weatherInfo.innerHTML = `
                <p id="location">Location: ${location}</p>
                <p id="temperature">Temperature: ${temperature}°C</p>
                <p id="description">Description: ${description}</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherInfo.innerHTML = `<p>Could not fetch weather data. Please try again.</p>`;
        });
}
