import axios from "axios";
axios.defaults.withCredentials = true;

export async function SummonerData() {
  try {
    const response = await axios.get(
      "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/늑 사 덤?api_key=RGAPI-bb7f7012-ce21-49ec-93c5-9e5195402e7b"
    );
    return response;
  } catch (error) {
    console.log(error(error));
  }
}

export async function SummonerLeagueData() {
  try {
    const response = await axios.get(
      "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/늑 사 덤?api_key=RGAPI-bb7f7012-ce21-49ec-93c5-9e5195402e7b"
    );
    return response;
    
  } catch (error) {
    console.log(error(error));
  }
}
