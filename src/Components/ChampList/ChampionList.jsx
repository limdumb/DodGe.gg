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
      const response = await champName();
      response.forEach((el) => {
        if (el.name.length > 3) {
          el.name = el.name.substr(0, 3) + "...";
        }
      });
      setChampionName(response);
    };
    championData();
  }, []);

  return (
    <aside className="Right_Aside_Container">
      <ul className="Champion_List_Container">
        {championName &&
          championName.map((data, index) => {
            return (
              <div
                className="Champion__List"
                key={index}
                onClick={() => console.log("하이")}
              >
                <img className="Champ_Image" width={'40px'} src={data.image} />
                <div>
                  <span className="Champion_List_Name" key={index}>
                    {data.name}
                  </span>
                </div>
              </div>
            );
          })}
      </ul>
    </aside>
  );
}
