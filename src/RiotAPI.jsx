import axios from "axios";

export async function SummonerData() {
  try {
    const response = await axios
      .get(
        "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/늑 사 덤?api_key=RGAPI-43d75ba5-8a55-4405-bca8-a5d75f2efb19"
      )
    return response;
  } catch (error) {
    console.log(error(error));
  }
}

export async function SummonerLeagueData() {
  try {
    const response = await axios.get(
      "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/eNR-W7JuvHIfroVhzz3x8zmjPd26m_l1jCH-gK3s_TwZ08I?api_key=RGAPI-43d75ba5-8a55-4405-bca8-a5d75f2efb19"
    );
    return response;
  } catch (error) {
    console.log(error(error));
  }
}
