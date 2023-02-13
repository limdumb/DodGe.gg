const apiKrBase = "https://kr.api.riotgames.com";
const apiAsiaBase = "https://asia.api.riotgames.com";

export const krInstance = axios.create({
  baseURL: apiKrBase,
  timeout: 1000,
});

export const asiaInstance = axios.create({
  baseURL: apiAsiaBase,
  timeout: 1000,
});
