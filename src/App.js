import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const myCity = 'Vienna';
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const myUrl = `http://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=metric&appid=${apiKey}`;

  const [allWeatherInfo, setAllWeatherInfo] = useState();
  const getWeather = async () => {
    await fetch(myUrl)
      .then((response) => response.json())
      .then((response) => {
        setAllWeatherInfo(response);
      })
      .catch((error) =>
        // handle error
        console.error(error),
      );
  };
  useEffect(() => {
    getWeather();
  });

  return (
    <>
      <div className="App">Try</div>
      <div>
        <p>name: {allWeatherInfo?.name}</p>
        <p>temp: {allWeatherInfo?.main.temp}</p>
        <button onClick={() => getWeather()}> Try me</button>
      </div>
    </>
  );
}

export default App;
