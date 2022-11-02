import logo from "./logo.svg";
import "./App.css";
import MyPages from "./MainPage/MyPages";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mypage" element={<MyPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
