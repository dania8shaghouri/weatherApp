// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchWeather = createAsyncThunk("weatherApi/fetchWeather",
//   async () => {
//     try {
//   const response = await axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?lat=40.19&lon=29.07&appid=${API_KEY}`,
//     // {
//     //   cancelToken: new cancelToken((c) => {
//     //     cancelAxios = c;
//     //   }),
//     // },
//   );

//   // 272.15 kelvin to celsius
//   const responseTemp = Math.round(response.data.main.temp - 272.15);
//   const min = Math.round(response.data.main.temp_min - 272.15);
//   const max = Math.round(response.data.main.temp_max - 272.15);
//   const description = response.data.weather[0].description;
//   const responseIcon = response.data.weather[0].icon;

//   // setTemp({
//   //   number: responseTemp,
//   //   min: min,
//   //   max: max,
//   //   description: description,
//   //   icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
//   // });
// }});

// const wetherApiSlice = createSlice({
//   name: "weatherApi",
//   initialState: {
//     result: "empty",
//     weather: {},
//     isLoading:false,
//     error: null

//   },
//   reducers: {
//     changeResult: (state, action) => {
//       state.result = "changed";
//     },
//   },

//   extraReducers(builder){
//     builder.addCase(fetchWeather.pending, (state, action) => {
//       state.isLoading = true;
//       state.error=null;

//     }).addCase(fetchWeather.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.weather = action.payload;
//     })
//     .addCase(fetchWeather.rejected, (state, action) => {
//       state.isLoading= false;
//       state.error = action.payload
//     })
//   }
// });

// export const { changeResult } = wetherApiSlice.actions;
// export default wetherApiSlice.reducer;

import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const API_KEY = import.meta.env.VITE_WEATHER_KEY;
export const fetchWeather = createAsyncThunk(
  "weatherApi/fetchWeather",
  async () => {
    console.log("calling fetch weather");
    
    const response = await axios.get(
      
      `https://api.openweathermap.org/data/2.5/weather?lat=40.19&lon=29.07&appid=${API_KEY}`,
      // {
      // 	cancelToken: new axios.CancelToken((c) => {
      // 		cancelAxios = c;
      // 	}),
      // }
    );

    // handle success
    const responseTemp = Math.round(response.data.main.temp - 272.15);
    const min = Math.round(response.data.main.temp_min - 272.15);
    const max = Math.round(response.data.main.temp_max - 272.15);
    const description = response.data.weather[0].description;
    const responseIcon = response.data.weather[0].icon;

    console.log(response);
    // setTemp({
    // 	number: responseTemp,
    // 	min: min,
    // 	max: max,
    // 	description: description,
    // 	icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
    // });

    return {
      number: responseTemp,
      min,
      max,
      description,
      icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
    };
  },
);
const weatherApiSlice = createSlice({
  name: "weatherApi",

  initialState: {
    result: "empty",
    weather: null,
    isLoading: false,
  },

  reducers: {
    changeResult: (state, action) => {
      state.result = "changed";
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("============**********");

        console.log(state, action);
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { changeResult } = weatherApiSlice.actions;
export default weatherApiSlice.reducer;
