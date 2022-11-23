import { useEffect } from "react";
import { useState } from "react";
import { champInfo } from "../API/RiotAPI";
import { GameInfoImage } from "./MyPage/RecordList";

export default function ChampionList() {
  const [championName, setChampionName] = useState(null);

  useEffect(() => {
    const championData = async () => {
      const response = await champInfo();
      setChampionName(response);
    };
    championData();
  }, []);

  console.log(championName);
  return (
    <ul>
      {championName &&
        championName.map((el) => {
          return (
            <li key={el}>
              <GameInfoImage width={50}
                src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${el}.png`}
              />
            </li>
          );
        })}
    </ul>
  );
}
