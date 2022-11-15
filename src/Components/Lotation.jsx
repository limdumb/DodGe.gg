import { useState } from "react";
import { useEffect } from "react";
import "./Lotation.css";

export default function Lotation() {
  const [data, setData] = useState([]);
  const [lotationKey, setLotaitionKey] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/11.12.1/data/ko_KR/champion.json`
      );
      const result = await res.json();
      /* 1. 데이터를 return 하고 */
      return result;
    }
    /* 2. then을 통해 response를 넘긴다. */
    fetchData().then((res) => setData(res));
  }, []);
  console.log(data);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-7328a2e6-8414-463f-a522-433b6cb54ac8
        `
      );
      const result = await res.json();
      /* 1. 데이터를 return 하고 */
      return result;
    }
    /* 2. then을 통해 response를 넘긴다. */
    fetchData().then((res) => {
      setLotaitionKey(res.freeChampionIds);
    });
  }, []);
  console.log(lotationKey);

  const champion = [];
  const newArr = [];
  const Url = "http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/";

  for (let data2 in data.data) {
    champion.push(data2);
  }

  for (let i = 0; i < lotationKey.length; i++) {
    for (let j = 0; j < champion.length; j++) {
      if (Number(data.data[champion[j]].key) === Number(lotationKey[i])) {
        newArr.push(data.data[champion[j]]);
      }
    }
  }
  console.log(newArr);

  console.log(champion);

  return (
    <>
      <h3>금주의 로테이션</h3>
      <div className="lotation">
        {
          <div className="Lotation__Container">
            {data.data
              ? newArr.map((el, idx) => {
                  console.log(`${Url}${el.id}.png`);
                  return (
                    <span>
                      <img
                        className="Lotation__Img"
                        src={`${Url}${el.id}.png`}
                      />
                    </span>
                  );
                })
              : ""}
          </div>
        }
      </div>
    </>
  );
}
