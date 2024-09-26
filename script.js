// Weather App 

const apikey = "19e07f42d362778893c24a2840c855b7";

const getWeatherData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;

}

const displayWeather = async () => {
    const city = document.getElementById('city').value;
    const weatherData = await getWeatherData(city);

    const temperatureCelsius = Math.round(weatherData.main.temp - 273.15);
    const humidity = weatherData.main.humidity

    document.getElementById('result').innerHTML = `
    <div class="weather-header">
        <h1>${weatherData.name}</h1>
    </div>
    <div class="weather-info">
        <h3>Temperature: ${temperatureCelsius}°C</h3>
        <p>Weather: ${weatherData.weather[0].description}</p>
        <p>Humidity: ${humidity}%</p>
    </div>
    `


}

document.getElementById('weatherForm').addEventListener('submit', function (event) {
    event.preventDefault();
    displayWeather();
});