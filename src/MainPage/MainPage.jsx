import { useState, useEffect } from "react";
import React from "react";
import MainFooter from "../Components/CommonComponents/Footer";
import MainHeader from "../Components/CommonComponents/Header";
import ChampionGuide from "../Components/ChampionGuide/ChampionGuide";
import ChampionList from "../Components/ChampList/ChampionList";
import Tab from "../Components/TapComponent/Tab";
import Nav from "../Components/Nav/Nav";
import "./MainPage.css";
import OpList from "../Components/OPList/OPList";

// 1. 둘을 연결해주는 상태값이 존재해야함
// 2. 상태값은 List가 , 변경함수는 Tab의 하위 컴포넌트인 SerchInput으로
// 3. 변경함수에 input의 e.target.value를 넣어줌
// 4. 변경된 상태값을 확인해서 해당 상태값이 포함 되는것만 filter되게 만드는 함수작성
// 5. filter된 이름의 챔피언만 랜더링되게 해야함

export default function MainPage() {
  const line = ["TOP", "JUNGLE", "MID", "ADC", "SUPPORT"];
  const [CheckLine, setCheckLine] = useState("TOP");
  const [serchInputValue, setSerchInputValue] = useState("");

  return (
    <div>
      <MainHeader />
      <main className="Main_Container">
        <div>
          <Nav />
        </div>
        <div className="Main_Contents">
          <div>
            <Tab
              line={line}
              serchInputValue={serchInputValue}
              setCheckLine={setCheckLine}
              setSerchInputValue={setSerchInputValue}
            />
            <ChampionList serchInputValue={serchInputValue} />
          </div>
          <ChampionGuide />
          <OpList />
        </div>
      </main>
      <MainFooter />
    </div>
  );
}
