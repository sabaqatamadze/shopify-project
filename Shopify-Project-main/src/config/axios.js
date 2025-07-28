import axios from "axios";

const config = axios.create({
  baseURL: "https://dummyjson.com/",
});
export default config;

