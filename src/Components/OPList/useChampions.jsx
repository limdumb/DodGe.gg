import Champion from "./Json/Champion.json";

const useChampions = (line) => {
  const data = Champion[line];
  const championList = data.map((data) => {
    return {
      positionRank: data.positionRank,
      img: data.img,
      name: data.name,
      positionTier: data.positionTier === 0 ? "op" : data.positionTier,
      positionWinRate: data.positionWinRate,
      positionPickRate: data.positionPickRate,
      positionBanRate: data.positionBanRate,
      positionCounters: data.positionCounters,
    };
  });

  return championList;
};

export default useChampions;
