import './App.css';
import ChampionDetail from './MainPage/ChampionDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ChampionDetail championId={"Akali"}/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
