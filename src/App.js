import "./App.css";
import MyPages from "./MainPage/MyPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChampionDetail from "./MainPage/ChampionDetail";
import MainPage from "./MainPage/MainPage";
import Footer from "./Components/Footer.jsx";

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
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
