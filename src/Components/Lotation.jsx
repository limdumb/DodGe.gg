import { useState } from "react";
import { useEffect } from "react";

export default function Lotation() {
  const [opposite, setOpposite] = useState(false);
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
        `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-6d78fbda-960c-4343-9adb-1deb964770c2`
      );
      const result = await res.json();
      /* 1. 데이터를 return 하고 */
      return result;
    }
    /* 2. then을 통해 response를 넘긴다. */
    fetchData().then((res) => {
      setLotaitionKey(res.freeChampionIds);
      setOpposite(true);
    });
  }, []);
  console.log(lotationKey);

  return (
    <>
      <h3>금주의 로테이션</h3>
      <div className="lotation"></div>
    </>
  );
}
