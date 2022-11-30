import Champion from "./Json/Champion.json";

const useChampions = (line) => {
  const data = Champion[line].championRankingList;
  const championList = data.map((data) => {
    return {
      positionRank: data.positionRank,
      img: data.image_url,
      name: data.name,
      positionTier: data.positionTier === 0 ? "op" : data.positionTier,
      positionWinRate: (data.positionWinRate * 100).toFixed(2) + "%",
      positionPickRate: (data.positionPickRate * 100).toFixed(2) + "%",
      positionBanRate: (data.positionBanRate * 100).toFixed(2) + "%",
      positionCounters: data.positionCounters[0].img_url,
    };
  });
  let listSort = championList.sort(function (a, b) {
    return a.positionRank - b.positionRank;
  });

  return listSort;
};

export default useChampions;
