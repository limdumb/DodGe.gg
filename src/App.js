import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./MainPage/Home";
import "./MainPage/Home.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
