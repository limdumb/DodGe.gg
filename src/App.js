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
import ChampionSearchList from "./Components/ChampList/ChampionSearchList";
import OpList from "./Components/OPList/OPList";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [modalCheck, setModalCheck] = useState([false, false]);
  const [champSelected, setChampSelected] = useState(null);
  return (
    <BrowserRouter>
      <Modal modalCheck={modalCheck} setModalCheck={setModalCheck}/>
      <Nav modalCheck={modalCheck} setModalCheck={setModalCheck} />
      <MainHeader darkMode={darkMode}/>
      <main>
        <aside>
          <ChampionSearchList setChampSelected={setChampSelected} darkMode={darkMode}/>
          <OpList/>
        </aside>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/champion/:champion"
            element={
              champSelected && <ChampionGuide champSelected={champSelected} />
            }
          />
          <Route path="/mypage/:summoner" element={<MyPages />} />
        </Routes>
      </main>
      <MainFooter />
    </BrowserRouter>
  );
}

export default App;