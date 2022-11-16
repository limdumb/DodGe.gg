<<<<<<< HEAD
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
=======
import logo from "./logo.svg";
import "./App.css";
import MyPages from "./MainPage/MyPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return
>>>>>>> 4dc08e155c562e3cb41ad5af1dbafa1ea22f4c55
}

export default App;
