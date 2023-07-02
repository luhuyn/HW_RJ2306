function getWeather() {
    var locationInput = document.getElementById("locationInput").value;
    var apiKey = "b2e2c5aefa3d177f3ff184841a6c9acf"; 

    axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: locationInput,
            appid: apiKey,
            units: 'metric'
        }
    })
    .then(function (response) {
        var weatherData = response.data;
        var temperature = weatherData.main.temp;
        var description = weatherData.weather[0].description;

        var weatherInfoElement = document.getElementById("weatherInfo");
        weatherInfoElement.innerHTML = "Temperature: " + temperature + "°C<br>Description: " + description;
    })
    .catch(function (error) {
        console.log(error);
    });
}

