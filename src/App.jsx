import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import axios from "axios";
import moment from "moment";
import "moment/locale/ar";

import "./App.css";
import "./index.css";
import WeatherCard from "./components/WeatherCard";

// let cancelAxios = null;

function App() {
  const [dateAndTime, setdateAndTime] = useState("");
  const [temp, setTemp] = useState({
    number: null,
    description: "",
    min: null,
    max: null,
    icon: null,
  });
  const { t, i18n } = useTranslation();

  useEffect(() => {
    moment.locale(i18n.language);
    setdateAndTime(moment().format("MMM Do YYYY, h:mm:ss a"));
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const API_KEY = import.meta.env.VITE_WEATHER_KEY;
  console.log("KEY:", import.meta.env.VITE_WEATHER_KEY);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=40.19&lon=29.07&appid=${API_KEY}`,
      )
      .then(function (response) {
        // 272.15 kelvin to celsius
        const responseTemp = Math.round(response.data.main.temp - 272.15);
        const min = Math.round(response.data.main.temp_min - 272.15);
        const max = Math.round(response.data.main.temp_max - 272.15);
        const description = response.data.weather[0].description;
        const responseIcon = response.data.weather[0].icon;

        setTemp({
          number: responseTemp,
          min: min,
          max: max,
          description: description,
          icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div
        className="bg-[var(--body-bg)] 
    min-h-screen flex flex-col items-center justify-center gap-4 "
      >
        {/* dil buttonu */}
        <button
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
          }
          className="px-4 py-1 border rounded"
        >
          {i18n.language === "en" ? "Arabic" : "English"}
        </button>

        {/* weahter card */}
        <WeatherCard
          city={t("city")}
          date={dateAndTime}
          condition={temp.description}
          icon={temp.icon}
          temp={temp.number}
          high={temp.max}
          low={temp.min}
        />
      </div>
    </>
  );
}

export default App;
