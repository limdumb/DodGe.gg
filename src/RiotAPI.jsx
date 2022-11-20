import axios from "axios";
const apiKey = "RGAPI-e7885024-7a6d-443d-83ce-e98686f13ba4";
const apiKrBase = "https://kr.api.riotgames.com";
const apiAsiaBase = "https://asia.api.riotgames.com";
const UserName = '늑 사 덤'

export async function SummonerData() {
  try {
    const response = await axios.get(
      `${apiKrBase}/lol/summoner/v4/summoners/by-name/${UserName}?api_key=${apiKey}`
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
      `${apiAsiaBase}/lol/match/v5/matches/KR_6215756465?api_key=${apiKey}`
    );
    //변수명은 변경 예정(생각중)
    const me = response.data.info.participants.filter(
      (item) => item.summonerName === UserName
    )[0];

    const redTeam = response.data.info.participants.filter(
      (item) => item.teamId === 100
    );

    const blueTeam = response.data.info.participants.filter(
      (item) => item.teamId === 200
    );

    const redTeamSummonerName = redTeam.map((el) => {
      return el.summonerName;
    });

    const blueTeamSummonerName = blueTeam.map((el) => {
      return el.summonerName;
    });

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
      summonerName: me.summonerName,
      profileIcon: me.profileIcon,
      championName: me.championName,
      gameCreation: response.data.info.gameCreation,
      redTeamSummonerName: redTeamSummonerName,
      blueTeamSummonerName: blueTeamSummonerName,
    };
  } catch (error) {
    console.log(error(error));
  }
}
