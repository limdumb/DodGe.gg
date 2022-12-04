import { useState, useEffect } from "react";
import React from "react";
import MainFooter from "../Components/CommonComponents/Footer";
import MainHeader from "../Components/CommonComponents/Header";
import ChampionGuide from "../Components/ChampionGuide/ChampionGuide";
import ChampionList from "../Components/ChampList/ChampionList";
import Tab from "../Components/TapComponent/Tab";
import Nav from "../Components/Nav/Nav";
import "./MainPage.css";
import OpList from '../Components/OPList/OPList'

export default function MainPage() {
  const line = ["TOP", "JUNGLE", "MID", "ADC", "SUPPORT"];
  const [CheckLine, setCheckLine] = useState("TOP");
  return (
    <div>
      <MainHeader />
      <main className="Main_Container">
        <div>
          <Nav />
        </div>
          <div className="Main_Contents">
            <div>
                <Tab line={line} setCheckLine={setCheckLine} />
              <ChampionList />
            </div>
            <ChampionGuide />
            <OpList/>
          </div>
      </main>
      <MainFooter />
    </div>
  );
}
