import { useEffect } from "react";
import { useState } from "react";
import { champName } from "../../API/RiotAPI";
import "./ChampionList.css";
import { filterChampName } from "../../Function/Serch";

export default function ChampionList({serchInputValue}) {
  const [championName, setChampionName] = useState(null);
  const [champNormalName, setChampNormalName] = useState(null);
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
    const championNameData = async () => {
      const championNames = {};
      const response = await champName();
      response.forEach((el) => {
        championNames[el.en_name] = el.name;
      });
      setChampNormalName(response);
    };
    championNameData();
    championData();
  }, []);

  const regex = filterChampName(serchInputValue)
  
  const result = champNormalName&&champNormalName.filter((el, index)=>{
    return regex.test(el.name)
  })

  console.log(result)

  return (
    <aside className="Right_Aside_Container">
      <ul className="Champion_List_Container">
        {result &&
          result.map((data, index) => {
            return (
              <div
                className="Champion__List"
                key={index}
                onClick={() => console.log("하이")}
              >
                <img
                  className="Champ_Image"
                  width={"40px"}
                  src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${data.en_name}.png`}
                />
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
