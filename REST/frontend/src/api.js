import axios from "axios";

const BASE_URL = "http://localhost:8000";
const api = axios.create({
  baseURL: BASE_URL,
});

export const getWeather = async (city) => {
  const url = `/weather/${city}`;
  const response = await api.get(url);
  return response.data;
};
