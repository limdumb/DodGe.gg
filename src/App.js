import "./App.css";
import MyPages from "./MainPage/MyPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./MainPage/Home";
import ChampionDetail from "./MainPage/ChampionDetail";
import ChampionTier from "./MainPage/ChampionTier";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/mypage" element={<MyPages />} /> */}
        {/* <Route path="/championdetail" element={<ChampionDetail championId={"Akali"}/>} /> */}
        {/* <Route path="/" element={<ChampionDetail championId={"Akali"}/>} /> */}
        {/* <Route path="/championtier" element={<ChampionTier />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
