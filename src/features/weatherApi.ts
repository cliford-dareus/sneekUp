import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const WEATHER_API_KEY = "7fb270f7006b4875c7351bfd27e4ce21";
const BaseURL = `https://api.openweathermap.org/data/2.5`;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseURL,
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ lat, lon }) =>
        `/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`,
    }),
    getForcasts: builder.query({
      query: ({ lat, lon }) =>
        `/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`,
    }),
  }),
});

export const { useGetWeatherQuery, useGetForcastsQuery } = weatherApi;
