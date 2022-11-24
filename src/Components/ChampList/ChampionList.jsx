import { useEffect } from "react";
import { useState } from "react";
import { champName } from "../../API/RiotAPI";
import { GameInfoImage } from "../MyPage/RecordList";
import "./ChampionList.css";
import { StyleSpan } from "../MyPage/RecordList";

export default function ChampionList() {
  const [championName, setChampionName] = useState(null);

  useEffect(() => {
    const championData = async () => {
      const result = await champName();
      setChampionName(result);
    };

    championData();
  }, []);

  const ChampionList = () => {
    return (
      <>
        {championName&&championName.map((data, index) => {
          return (
            <div className="Champion__List" key={index}>
               <GameInfoImage width={50} src={data.image} />
               <div>
              <StyleSpan fontsize={'13px'} key={index}>{data.name}</StyleSpan>
               </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <aside className="Right_Aside_Container">
      <ul className="Champion_List_Containor">{ChampionList()}</ul>
    </aside>
  );
}
