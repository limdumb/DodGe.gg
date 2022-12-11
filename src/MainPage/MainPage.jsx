import { useState, useEffect } from "react";
import React from "react";
import MainFooter from "../Components/CommonComponents/Footer";
import MainHeader from "../Components/CommonComponents/Header";
import ChampionGuide from "../Components/ChampionGuide/ChampionGuide";
import ChampionList from "../Components/ChampList/ChampionList";
import { ChampionTab } from "../Components/TapComponent/Tab";
import Nav from "../Components/Nav/Nav";
import "./MainPage.css";
import OpList from "../Components/OPList/OPList";
import Modal from "../Components/CommonComponents/Modal";

export default function MainPage() {
  const line = ["TOP", "JUNGLE", "MID", "ADC", "SUPPORT"];
  const [CheckLine, setCheckLine] = useState("TOP");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [tabSearchInputValue, setTabSearchInputValue] = useState("");
  const [modalCheck, setModalCheck] = useState([false, false]);
  return (
    <div>
      <Modal modalCheck={modalCheck} />
      <MainHeader />
      <main className="Main_Container">
        <div>
          <Nav modalCheck={modalCheck} setModalCheck={setModalCheck} />
        </div>
        <div className="Main_Contents">
          <div>
            <ChampionTab
              line={line}
              setSearchInputValue={setSearchInputValue}
              searchInputValue={searchInputValue}
              setCheckLine={setCheckLine}
            />
            <ChampionList searchInputValue={searchInputValue} />
          </div>
          <ChampionGuide />
          <OpList
            line={line}
            tabSearchInputValue={tabSearchInputValue}
            setTabSearchInputValue={setTabSearchInputValue}
          />
        </div>
      </main>
      <MainFooter />
    </div>
  );
}
