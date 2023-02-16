import "./App.css";
import MyPages from "./MainPage/MyPages";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChampionGuide from "./Components/ChampionGuide/ChampionGuide";
import MainHeader from "./Components/CommonComponents/Header";
import MainFooter from "./Components/CommonComponents/Footer";
import Modal from "./Components/CommonComponents/Modal";
import Nav from "./Components/Nav/Nav";
import ChampionSearchList from "./Components/ChampList/ChampionSearchList";
import OpList from "./Components/OPList/OPList";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [modalCheck, setModalCheck] = useState([false, false]);
  const [champSelected, setChampSelected] = useState(null);
  return (
    <BrowserRouter>
      <Modal modalCheck={modalCheck} setModalCheck={setModalCheck}/>
      <Nav modalCheck={modalCheck} setModalCheck={setModalCheck} setDarkMode={setDarkMode} darkMode={darkMode}/>
      <MainHeader darkMode={darkMode}/>
      <main>
        <aside>
          <ChampionSearchList setChampSelected={setChampSelected} darkMode={darkMode}/>
          <OpList position={'main'}/>
        </aside>
        <Routes>
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