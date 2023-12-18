import axios from "axios";
const apiKrBase = process.env.REACT_APP_KR_BASE;
const apiAsiaBase = process.env.REACT_APP_ASIA_BASE;
const ddragonDataUrl = process.env.REACT_APP_DRAGON_DATA_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const krInstance = axios.create({
  baseURL: apiKrBase,
  timeout: 1000,
  params: {
    api_key: `${apiKey}`,
  },
});

export const asiaInstance = axios.create({
  baseURL: apiAsiaBase,
  timeout: 1000,
  params: {
    api_key: `${apiKey}`,
  },
});

export const ddragonInstance = axios.create({
  baseURL: ddragonDataUrl,
  timeout: 1000,
});
