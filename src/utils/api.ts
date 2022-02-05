import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod",
  params: { api_key: process.env.REACT_APP_API_KEY },
});
