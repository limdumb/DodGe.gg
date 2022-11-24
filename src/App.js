import "./App.css";
import MyPages from "./MainPage/MyPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChampionDetail from "./MainPage/ChampionDetail";
import MainPage from "./MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mypage" element={<MyPages />} />
        <Route
          path="/championdetail"
          element={<ChampionDetail championId={"Aatrox"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
