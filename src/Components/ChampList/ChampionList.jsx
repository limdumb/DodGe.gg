import { useEffect } from "react";
import { useState } from "react";
import { champName } from "../../API/RiotAPI";
import { GameInfoImage } from "../MyPage/RecordList";
import "./ChampionList.css";
import { StyleSpan } from "../MyPage/RecordList";
import styled from "styled-components";

export default function ChampionList() {
  const [championName, setChampionName] = useState(null);

  useEffect(() => {
    const championData = async () => {
      const response = await champName();
      response.forEach((el) => {
        if(el.name.length > 3){
          el.name = el.name.substr(0, 3)+"..."
        }
      })
      setChampionName(response);
    };
    championData();
  }, []);

  console.log(championName)
  const ChampionList = () => {
    return (
      <>
        {championName &&
          championName.map((data, index) => {
            return (
              <div className="Champion__List" key={index} onClick={()=> console.log('하이')}>
                <GameInfoImage width={50} src={data.image} />
                <div>
                  <StyleSpan fontsize={"13px"} key={index}>
                    {data.name}
                  </StyleSpan>
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
