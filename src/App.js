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
  const [darkMode, setDarkMode] = useState(false);
  const [modalCheck, setModalCheck] = useState([false, false]);
  const [champSelected, setChampSelected] = useState(null);
  return (
    <BrowserRouter>
      <Modal
        modalCheck={modalCheck}
        setModalCheck={setModalCheck}
        darkMode={darkMode}
      />

      <Nav
        modalCheck={modalCheck}
        setModalCheck={setModalCheck}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />

      <MainHeader darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className={darkMode ? "Dark_BG" : null}>
        <aside>
          <ChampionSearchList
            setChampSelected={setChampSelected}
            darkMode={darkMode}
          />
          <OpList position={"main"} darkMode={darkMode} />
        </aside>
        <img
          className="SideBar"
          alt="SideBar"
          src={`${process.env.PUBLIC_URL}/Image/Light_SideBar.png`}
        />
        <Routes>
          <Route
            path="/champion/:champion"
            element={
              champSelected && (
                <ChampionGuide
                  champSelected={champSelected}
                  darkMode={darkMode}
                />
              )
            }
          />
          <Route
            path="/mypage/:summoner"
            element={<MyPages darkMode={darkMode} />}
          />
        </Routes>
      </main>
      <MainFooter />
    </BrowserRouter>
  );
}

export default App;
