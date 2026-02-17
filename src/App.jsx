// import { useTranslation } from "react-i18next";
// import { useEffect, useState } from "react";

// // import axios from "axios";
// import moment from "moment";
// import "moment/locale/ar";

// import "./App.css";
// import "./index.css";
// import WeatherCard from "./components/WeatherCard";

// import { useSelector, useDispatch } from "react-redux";
// import { changeResult } from "./weatherApiSlice";
// import { fetchWeather } from "./weatherApiSlice";
// // let cancelAxios = null;

// function App() {
//   // redux code
//   const dispath = useDispatch();
//   const result = useSelector((state) => {
//     console.log("the state is ", state);
//     return state.result;
//   });

//   const isLoading = useSelector((state) => {
//     return state.weather.isLoading;
//   });

//   const weather = useSelector((state) => state.weather);

//   const error = useSelector((state) => state.error);

//   const [dateAndTime, setdateAndTime] = useState("");
//   const [temp, setTemp] = useState({
//     number: null,
//     description: "",
//     min: null,
//     max: null,
//     icon: null,
//   });
//   const { t, i18n } = useTranslation();

//   useEffect(() => {
//     // trying redux
//     // dispath(changeResult())

//     dispath(fetchWeather());
//     moment.locale(i18n.language);
//     setdateAndTime(moment().format("MMM Do YYYY, h:mm:ss a"));
//     document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
//   }, [i18n.language]);

//   const API_KEY = import.meta.env.VITE_WEATHER_KEY;
//   // console.log("KEY:", import.meta.env.VITE_WEATHER_KEY);

//   // useEffect(() => {
//   //   axios
//   //     .get(
//   //       `https://api.openweathermap.org/data/2.5/weather?lat=40.19&lon=29.07&appid=${API_KEY}`,
//   //     )
//   //     .then(function (response) {
//   //       // 272.15 kelvin to celsius
//   //       const responseTemp = Math.round(response.data.main.temp - 272.15);
//   //       const min = Math.round(response.data.main.temp_min - 272.15);
//   //       const max = Math.round(response.data.main.temp_max - 272.15);
//   //       const description = response.data.weather[0].description;
//   //       const responseIcon = response.data.weather[0].icon;

//   //       setTemp({
//   //         number: responseTemp,
//   //         min: min,
//   //         max: max,
//   //         description: description,
//   //         icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
//   //       });
//   //       console.log(response);
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //     });
//   // }, []);

//   return (
//     <>
//       <div
//         className="bg-[var(--body-bg)] 
//     min-h-screen flex flex-col items-center justify-center gap-4 "
//       >
//         {/* dil buttonu */}
//         <button
//           onClick={() =>
//             i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
//           }
//           className="px-4 py-1 border rounded"
//         >
//           {i18n.language === "en" ? "Arabic" : "English"}
//         </button>

//         {/* weahter card */}
//         {/* <WeatherCard
//           city={t("city")}
//           date={dateAndTime}
//           condition={temp.description}
//           icon={temp.icon}
//           temp={temp.number}
//           high={temp.max}
//           low={temp.min}
//         /> */}
//         {isLoading && <p>Loading...</p>}

//         {error && <p>{error}</p>}

//         {weather && (
//           <WeatherCard
//             city={t("city")}
//             date={dateAndTime}
//             condition={weather.description}
//             icon={weather.icon}
//             temp={weather.number}
//             high={weather.max}
//             low={weather.min}
//           />
//         )}
//       </div>
//     </>
//   );
// }

// export default App;





import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

// import axios from "axios";
import moment from "moment";
import "moment/locale/ar";

import "./App.css";
import "./index.css";
import WeatherCard from "./components/WeatherCard";

import { useSelector, useDispatch } from "react-redux";
import { changeResult } from "./weatherApiSlice";
import { fetchWeather } from "./weatherApiSlice";
// REDUX IMPORT



let cancelAxios = null;

function App() {
	// REDUX CODE
	const dispatch = useDispatch();

	const isLoading = useSelector((state) => {
		console.log("============");
		console.log(state);
		return state.weather.isLoading;
	});

	const temp = useSelector((state) => {
		return state.weather.weather;
	});

	const { t, i18n } = useTranslation();

	// ======== STATES ========= //
	const [dateAndTime, setDateAndTime] = useState("");
const error = useSelector((state) => state.weather.error);

	
const locale = i18n.language;

	useEffect(() => {
		// trying redux
		// dispatch(changeResult());

		console.log("dispatching fetch weather from the component");
		dispatch(fetchWeather());

		i18n.changeLanguage(locale);
	}, []);
	useEffect(() => {
		setDateAndTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
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
        {/* <WeatherCard
          city={t("city")}
          date={dateAndTime}
          condition={temp.description}
          icon={temp.icon}
          temp={temp.number}
          high={temp.max}
          low={temp.min}
        /> */}
        {isLoading && <p>Loading...</p>}

        {error && <p>{error}</p>}

        {temp && (
          <WeatherCard
            city={t("city")}
            date={dateAndTime}
            condition={temp.description}
            icon={temp.icon}
            temp={temp.number}
            high={temp.max}
            low={temp.min}
          />
        )}
      </div>
    </>
  );
}

export default App;