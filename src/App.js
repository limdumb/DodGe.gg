import "./App.css";
import MyPages from "./MainPage/MyPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChampionDetail from "./MainPage/ChampionDetail";
import MyPages from "./MainPage/MyPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPages />} />
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
