import axios from "axios";

export async function SummonerData() {
  try {
    const response = await axios.get(
      "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/늑 사 덤?api_key=RGAPI-8901f4b5-f9dc-46f6-8dd5-fa66c5962079"
    );
    return response;
  } catch (error) {
    console.log(error(error));
  }
}
