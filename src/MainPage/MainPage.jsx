import { useState, useEffect } from "react";
import React from "react";
import MainFooter from "../Components/CommonComponents/Footer";
import MainHeader from "../Components/CommonComponents/Header";
import ChampionGuide from "../Components/ChampionGuide/ChampionGuide";
import ChampionList from "../Components/ChampList/ChampionList";
import Tab from "../Components/TapComponent/Tab";
export default function MainPage() {
  const line = ["TOP", "JUNGLE", "MID", "ADC", "SUPPORT"];
  const [CheckLine, setCheckLine] = useState("TOP");
  return (
    <body
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MainHeader />
      <main>
        <div>
          <Tab line={line} setCheckLine={setCheckLine} />
        </div>
        <div>
          <ChampionList />
        </div>
        <div>
          <ChampionGuide />
        </div>
      </main>
      <MainFooter />
    </body>
  );
}
