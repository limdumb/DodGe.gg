import { useState } from "react";
import { useEffect } from "react";

export default function Lotation() {
  const [data, setData] = useState([]);

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

  return (
    <>
      <h3>금주의 로테이션</h3>
      <div className="lotation"></div>
    </>
  );
}
