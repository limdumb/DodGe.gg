import { useState } from "react";

fetch(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%EC%9D%BC%ED%95%98%EB%8A%94%EA%B0%90%EC%9E%90?api_key=RGAPI-7328a2e6-8414-463f-a522-433b6cb54ac8

  
  `)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });

fetch(
  `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/OT6fyY6t8XgnuShUx5ZnVE2Vg0G0hHwBg3RTg81sWkjz6A?api_key=RGAPI-7328a2e6-8414-463f-a522-433b6cb54ac8
  
`
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
export default function Search() {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="Search__Box">
      <form action="." method="">
        <input
          className="Search__Text"
          type="text"
          placeholder="아이디를 입력해 주세요"
          value={search}
          onSubmit={onChangeSearch}
        />
        <button className="Search__Button" type="submit">
          검색
        </button>
      </form>
    </div>
  );
}
