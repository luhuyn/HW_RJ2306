import axios from 'axios';

export default function Home({ weatherData }) {
  const weather = weatherData.weather[0];
  const main = weatherData.main;

  return (
    <div>
      <h1>Weather in Hanoi</h1>
      <p>Condition: {weather.main}</p>
      <p>Description: {weather.description}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Feels like: {main.feels_like}°C</p>
      <p>Min Temperature: {main.temp_min}°C</p>
      <p>Max Temperature: {main.temp_max}°C</p>
      <p>Pressure: {main.pressure} hPa</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
}

export async function getStaticProps() {
  const apiKey = 'b2e2c5aefa3d177f3ff184841a6c9acf';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=hanoi&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data;
    return {
      props: { weatherData },
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return {
      props: { weatherData: null },
    };
  }
}
