import axios from "axios";
const apiKey = "RGAPI-97e82b7c-b63e-44ed-ace0-99b8dc767d9a";
const apiKrBase = "https://kr.api.riotgames.com";
const apiAsiaBase = "https://asia.api.riotgames.com";

export async function SummonerData() {
  try {
    const response = await axios.get(
      `${apiKrBase}/lol/summoner/v4/summoners/by-name/늑 사 덤?api_key=${apiKey}`
    );

    return {
      name: response.data.name,
      profileIconId: response.data.profileIconId,
      summonerLevel: response.data.summonerLevel,
    };
  } catch (error) {
    console.log(error(error));
  }
}

export async function SummonerLeagueData() {
  try {
    const response = await axios.get(
      `${apiKrBase}/lol/league/v4/entries/by-summoner/eNR-W7JuvHIfroVhzz3x8zmjPd26m_l1jCH-gK3s_TwZ08I?api_key=${apiKey}`
    );
    return response;
  } catch (error) {
    console.log(error(error));
  }
}

const Uuid = async () => {
  try {
    const response = await axios.get(
      `${apiAsiaBase}/lol/match/v5/matches/by-puuid/FOWsldOnkYnYYjsCBC36zudcGlKWr4muJuj8ukhZlAJ6ZPu50O4q_O8fMjNF_6yVSlw_ox2QfwXg3A/ids?start=0&count=20&api_key=${apiKey}`
    );
    return response;
  } catch (error) {
    console.log(error(error));
  }
};

export async function MatchSummoryData(name) {
  try {
    const response = await axios.get(
      `${apiAsiaBase}/lol/match/v5/matches/KR_6220081519?api_key=${apiKey}`
    );
    //변수명은 변경 예정(생각중)
    const me = response.data.info.participants.filter(
      (item) => (item.summonerName === "늑 사 덤")
    )[0];

    const spellSlot = [
      me.spell1Casts,
      me.spell2Casts,
      me.spell3Casts,
      me.spell4Casts,
    ];

    const itemSlot = [
      me.item0,
      me.item1,
      me.item2,
      me.item3,
      me.item4,
      me.item5,
      me.item6,
    ];

    return {
      gameMode: response.data.info.gameMode,
      kills: me.kills,
      deaths: me.deaths,
      assist: me.assists,
      itemSlot: itemSlot,
      teamId: response.data.info.participants.map((el) => el.teamId),
      totalMinionsKilled: me.totalMinionsKilled,
      win: me.win,
      spellSlot: spellSlot,
      summonerName: me.summonerName,
      profileIcon: me.profileIcon,
      championName: me.championName,
    };
  } catch (error) {
    console.log(error(error));
  }
}
