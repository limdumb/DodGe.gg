import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChampionTear from './MainPage/ChampionTear';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/championtear" element={<ChampionTear />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
