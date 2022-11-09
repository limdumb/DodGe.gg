import { useState } from "react";

fetch(
  `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%EC%9D%BC%ED%95%98%EB%8A%94%EA%B0%90%EC%9E%90?api_key=RGAPI-49d33900-372e-46c1-8e9a-5b8b5ab2b6e1
  `
)
  .then((res) => res.json())
  .then((res) => {
    // console.log(res);
  });

fetch(
  `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/OT6fyY6t8XgnuShUx5ZnVE2Vg0G0hHwBg3RTg81sWkjz6A?api_key=RGAPI-49d33900-372e-46c1-8e9a-5b8b5ab2b6e1
  `
)
  .then((res) => res.json())
  .then((res) => {
    // console.log(res);
  });
export default function Search() {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-box">
      <form action="." method="">
        <input
          className="search-text"
          type="text"
          placeholder="아이디를 입력해 주세요"
          value={search}
          onChange={onChangeSearch}
        />
        <button className="search-btn" type="submit">
          검색
        </button>
      </form>
    </div>
  );
}
