import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        city_temp: 15.05,
        feels_like: 14.62,
        humidity: 77,
        temp_max: 15.05,
        temp_min: 15.05,
        weather: "fog",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox weatherInfo={weatherInfo} />
    </div>
  );
}