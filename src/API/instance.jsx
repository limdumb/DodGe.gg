import axios from "axios";
const apiKrBase = "https://kr.api.riotgames.com";
const apiAsiaBase = "https://asia.api.riotgames.com";
const ddragonDataUrl = "http://ddragon.leagueoflegends.com";
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
