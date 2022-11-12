import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChampionTier from './MainPage/ChampionTier';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/championtier" element={<ChampionTier />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
