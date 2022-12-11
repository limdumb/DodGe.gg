import "./App.css";
import MyPages from "./MainPage/MyPages";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import ChampionGuide from "./Components/ChampionGuide/ChampionGuide";
import MainHeader from "./Components/CommonComponents/Header";
import MainFooter from "./Components/CommonComponents/Footer";
import Modal from "./Components/CommonComponents/Modal";
import Nav from "./Components/Nav/Nav";
import ChampionList from "./Components/ChampList/ChampionList";
import { ChampionTab } from "./Components/TapComponent/Tab";
import OpList from "./Components/OPList/OPList";

function App() {
  const [modalCheck, setModalCheck] = useState([false, false]);
  const line = ["TOP", "JUNGLE", "MID", "ADC", "SUPPORT"];
  const [CheckLine, setCheckLine] = useState("TOP");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [tabSearchInputValue, setTabSearchInputValue] = useState("");
  return (
    <BrowserRouter>
      <Modal modalCheck={modalCheck} />
      <Nav modalCheck={modalCheck} setModalCheck={setModalCheck} />
      <MainHeader />
      <main>
        <aside>
          <div>
            <ChampionTab
              line={line}
              setSearchInputValue={setSearchInputValue}
              searchInputValue={searchInputValue}
              setCheckLine={setCheckLine}
            />
            <ChampionList searchInputValue={searchInputValue} />
          </div>
          <OpList
            line={line}
            tabSearchInputValue={tabSearchInputValue}
            setTabSearchInputValue={setTabSearchInputValue}
          />
        </aside>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/champion" element={<ChampionGuide />} />
          <Route path="/mypage" element={<MyPages />} />
        </Routes>
      </main>
      <MainFooter />
    </BrowserRouter>
  );
}

export default App;
