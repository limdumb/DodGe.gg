import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
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
          onChange={onChange}
        />
        <button className="search-btn">검색</button>
      </form>
    </div>
  );
}
