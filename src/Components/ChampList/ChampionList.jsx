import { useEffect } from "react";
import { useState } from "react";
import { champName, rotationData } from "../../API/RiotAPI";
import { filterChampName } from "../../Function/Search";
import { useNavigate } from "react-router-dom";
import ChampionLine from "../OPList/Json/Champion.json";
import "./ChampionList.css";

export default function ChampionList({
  CheckLine,
  searchInputValue,
  setChampSelected,
  darkMode,
}) {
  let navigate = useNavigate();
  const [champNormalName, setChampNormalName] = useState(null);
  useEffect(() => {
    const championNameData = async () => {
      const championNames = {};
      const response = await champName();
      const rotationChamp = await rotationData();
      let championLine = ChampionLine[CheckLine];
      const filterChamp = [];
      if (CheckLine === "ALL") {
        setChampNormalName(response);
      } else if (CheckLine === "ROTATION") {
        response.forEach((el) => {
          championNames[el.en_name] = el.name;
          rotationChamp.forEach((data) => {
            let obj = {};
            if (el.en_name === data) {
              obj["name"] = el.name;
              obj["en_name"] = el.en_name;
              filterChamp.push(obj);
            }
          });
        });
        setChampNormalName(filterChamp);
      } else {
        response.forEach((el) => {
          championNames[el.en_name] = el.name;
          championLine.forEach((data) => {
            let obj = {};
            if (el.name === data.name) {
              obj["name"] = el.name;
              obj["en_name"] = el.en_name;
              filterChamp.push(obj);
            }
          });
        });
        setChampNormalName(filterChamp);
      }
    };
    championNameData();
  }, [CheckLine]);

  const regex = filterChampName(searchInputValue);

  const filterChampionName =
    champNormalName &&
    champNormalName.filter((el) => {
      return regex.test(el.name);
    });

  return (
    <aside
      className={
        darkMode ? "Dark_Right_Aside_Container" : "Right_Aside_Container"
      }
    >
      <div
        className={darkMode ? "Dark_Layout_Container" : "Layout_Container"}
      ></div>
      <ul
        className={
          darkMode ? "Dark_Champion_List_Container" : "Champion_List_Container"
        }
      >
        {filterChampionName &&
          filterChampionName.map((data, index) => {
            return (
              <li
                className="Champion_List"
                key={index}
                onClick={() => {
                  if (data.en_name !== "AurelionSol") {
                    setChampSelected(data.en_name);
                  }
                  navigate(`/champion/${data.en_name}`);
                }}
              >
                <img
                  className={
                    data.en_name !== "AurelionSol" ? "Champ_Image" : "RIP"
                  }
                  src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${data.en_name}.png`}
                />
                <div>
                  <span className="Champion_List_Name" key={index}>
                    {data.name.length > 3
                      ? data.name.substr(0, 3) + "..."
                      : data.name}
                  </span>
                </div>
              </li>
            );
          })}
      </ul>
    </aside>
  );
}
