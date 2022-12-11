import { useEffect } from "react";
import { useState } from "react";
import { champName } from "../../API/RiotAPI";
import "./ChampionList.css";
import { filterChampName } from "../../Function/Search";

export default function ChampionList({ searchInputValue, setChampSelected }) {
  const [champNormalName, setChampNormalName] = useState(null);
  useEffect(() => {
    const championNameData = async () => {
      const championNames = {};
      const response = await champName();
      response.forEach((el) => {
        championNames[el.en_name] = el.name;
      });
      setChampNormalName(response);
    };
    championNameData();
  }, []);

  const regex = filterChampName(searchInputValue);

  const filterChampionName =
    champNormalName &&
    champNormalName.filter((el) => {
      return regex.test(el.name);
    });

  return (
    <aside className="Right_Aside_Container">
      <ul className="Champion_List_Container">
        {filterChampionName &&
          filterChampionName.map((data, index) => {
            return (
              <div
                className="Champion_List"
                key={index}
                onClick={() => {
                  if (data.en_name !== "AurelionSol")
                    setChampSelected(data.en_name);
                }}
              >
                <img
                  className={
                    data.en_name !== "AurelionSol" ? "Champ_Image" : "RIP"
                  }
                  width={"40px"}
                  src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${data.en_name}.png`}
                />
                <div>
                  <span className="Champion_List_Name" key={index}>
                    {data.name.length > 3
                      ? data.name.substr(0, 3) + "..."
                      : data.name}
                  </span>
                </div>
              </div>
            );
          })}
      </ul>
    </aside>
  );
}
