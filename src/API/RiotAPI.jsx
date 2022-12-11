import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const apiKrBase = "https://kr.api.riotgames.com";
const apiAsiaBase = "https://asia.api.riotgames.com";

export async function summonerData(userName) {
  try {
    const response = await axios.get(
      `${apiKrBase}/lol/summoner/v4/summoners/by-name/${userName}?api_key=${apiKey}`
    );

    return {
      id: response.data.id,
      name: response.data.name,
      profileIconId: response.data.profileIconId,
      summonerLevel: response.data.summonerLevel,
      puuid: response.data.puuid,
    };
  } catch (error) {
    console.log(error(error));
  }
}

export async function summonerLeagueData(id) {
  try {
    const response = await axios.get(
      `${apiKrBase}/lol/league/v4/entries/by-summoner/${id}?api_key=${apiKey}`
    );
    return response;
  } catch (error) {
    console.log(error(error));
  }
}

export const gameUuid = async (puuid) => {
  try {
    const response = await axios.get(
      `${apiAsiaBase}/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${apiKey}`
    );
    return response;
  } catch (error) {
    console.log(error(error));
  }
};

export async function matchSummoryData(gameUuids, userName) {
  const getMatchData = async (uuid) => {
    try {
      const response = await axios.get(
        `${apiAsiaBase}/lol/match/v5/matches/${uuid}?api_key=${apiKey}`
      );
      //변수명은 변경 예정(생각중)
      const summonerFilterName = response.data.info.participants.filter(
        (item) => item.summonerName === userName
      )[0];

      const redTeam = response.data.info.participants.filter(
        (item) => item.teamId === 100
      );

      const blueTeam = response.data.info.participants.filter(
        (item) => item.teamId === 200
      );

      const redTeamChampName = response.data.info.participants.filter(
        (item) => item.championName
      );

      const userChampionName = response.data.info.participants.map((el) => {
        return el.championName;
      });

      const redTeamSummonerName = redTeam.map((el) => {
        return el.summonerName;
      });

      const blueTeamSummonerName = blueTeam.map((el) => {
        return el.summonerName;
      });
      const itemSlot = [
        summonerFilterName.item0,
        summonerFilterName.item1,
        summonerFilterName.item2,
        summonerFilterName.item3,
        summonerFilterName.item4,
        summonerFilterName.item5,
        summonerFilterName.item6,
      ];

      return {
        gameMode: response.data.info.gameMode,
        kills: summonerFilterName.kills,
        deaths: summonerFilterName.deaths,
        assist: summonerFilterName.assists,
        itemSlot: itemSlot,
        teamId: response.data.info.participants.map((el) => el.teamId),
        totalMinionsKilled: summonerFilterName.totalMinionsKilled,
        win: summonerFilterName.win,
        summonerName: summonerFilterName.summonerName,
        profileIcon: summonerFilterName.profileIcon,
        championName: summonerFilterName.championName,
        gameCreation: response.data.info.gameCreation,
        redTeamSummonerName: redTeamSummonerName,
        blueTeamSummonerName: blueTeamSummonerName,
        allChampionName: userChampionName,
        redTeamChampName: redTeamChampName,
        gameDuration: response.data.info.gameDuration,
        spellId1: summonerFilterName.summoner1Id,
        spellId2: summonerFilterName.summoner2Id,
      };
    } catch (error) {
      console.log(error(error));
    }
  };

  let results;
  if (gameUuids) {
    const slice = gameUuids.slice(0, 3);
    results = await Promise.all(
      slice.map((gameUuid) => {
        return getMatchData(gameUuid);
      })
    );
  } else {
    console.log("gameUuids is invalid");
  }
  return results;
}

export async function summonerSpell(spellId1, spellId2) {
  try {
    const response = await axios.get(
      "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/summoner.json"
    );
    const summonerSpellName = response.data.data;
    const twiceArr = [];
    const result = [];
    for (let i = 0; i < spellId1.length; i++) {
      for (let key of Object.keys(summonerSpellName)) {
        if (
          summonerSpellName[key].key === spellId1[i].toString() ||
          summonerSpellName[key].key === spellId2[i].toString()
        ) {
          result.push(
            `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/spell/${summonerSpellName[key].image.full}`
          );
        }
      }
    }
    for(let i=0; i < result.length; i+= 2){
      twiceArr.push(result.slice(i, i+2))
    }
    return twiceArr;
  } catch (error) {
    console.log(error(error));
  }
}

export async function champName() {
  let champion = [];
  let ko_name;
  await axios
    .get(
      "http://ddragon.leagueoflegends.com/cdn/12.22.1/data/ko_KR/champion.json"
    )
    .then((res) => {
      let name = Object.keys(res.data.data);
      ko_name = name.map((data) => res.data.data[data].name);
      ko_name.forEach((data, index) =>
        champion.push({
          name: data,
          en_name: name[index],
        })
      );
      champion.sort((name, data) => (name.name < data.name ? -1 : 1));
    });
  return champion;
}

export async function fetchChampData(champName) {
  let userData = [];
  await axios
    .get(
      `https://ddragon.leagueoflegends.com/cdn/12.23.1/data/ko_KR/champion/${champName}.json`
    )
    .then((res) => {
      userData.push(res.data.data);
    })
    .catch((err) => console.log(err));

  return userData;
}

export async function fetchRunesData() {
  let runes = [];
  await axios
    .get(
      `https://ddragon.leagueoflegends.com/cdn/12.23.1/data/ko_KR/runesReforged.json`
    )
    .then((res) => {
      runes.push(res.data);
    })
    .catch((err) => console.log(err));

  return runes;
}
