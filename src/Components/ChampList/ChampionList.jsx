import { useEffect } from "react";
import { useState } from "react";
import { sortChampName, rotationData } from "../../API/RiotAPI";
import { filterChampName } from "../../Function/Search";
import { useNavigate } from "react-router-dom";
import ChampionLine from "../OPList/Json/Champion.json";
import "./ChampionList.css";
import { useFetch } from "../../CustomHook/useFetch";
import Spinner from "../CommonComponents/Spinner";

export default function ChampionList({
  CheckLine,
  searchInputValue,
  setChampSelected,
  darkMode,
}) {
  const navigate = useNavigate();
  const {
    data: champion,
    isLoading: nameLoading,
    error: nameError,
  } = useFetch("/cdn/13.3.1/data/ko_KR/champion.json", "ddragon");

  const {
    data: rotationList,
    isLoading: rotationLoading,
    error: rotationError,
  } = useFetch("/lol/platform/v3/champion-rotations", "kr");
  // 로테이션 = 로테이션 데이터와 챔프 데이터를 가져와서 로테이션에 id를 챔프데이터의 id와 비교해서 맞는것만 로테이션에 노출
  const [champNormalName, setChampNormalName] = useState(null);

  useEffect(() => {
    const championNameData = async () => {
      const championNames = {};
      const response = sortChampName(champion);
      const rotationChamp = await rotationData();
      let championLine = ChampionLine[CheckLine];
      const filterChamp = [];

      if (CheckLine === "ALL") {
        setChampNormalName(response);
      }
      if (CheckLine === "ROTATION") {
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
  }, [champion, CheckLine]);

  const regex = filterChampName(searchInputValue);

  const filterChampionName =
    champNormalName &&
    champNormalName.filter((el) => {
      return regex.test(el.kr_name);
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
        {!nameLoading ? (
          filterChampionName &&
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
                  alt="AurelionSol"
                  className={
                    data.en_name !== "AurelionSol" ? "Champ_Image" : "RIP"
                  }
                  src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${data.en_name}.png`}
                />
                <div>
                  <span className="Champion_List_Name" key={index}>
                    {data.kr_name.length > 3
                      ? data.kr_name.substr(0, 3) + "..."
                      : data.kr_name}
                  </span>
                </div>
              </li>
            );
          })
        ) : (
          <Spinner />
        )}
      </ul>
    </aside>
  );
}
