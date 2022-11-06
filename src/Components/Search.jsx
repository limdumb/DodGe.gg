import { useState } from "react";

export default function Search() {
  return (
    <div className="search-box">
      <form action="." method="">
        <input
          className="search-text"
          type="text"
          placeholder="아이디를 입력해 주세요"
        />
        <button className="search-btn">검색</button>
      </form>
    </div>
  );
}
