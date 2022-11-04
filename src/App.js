import './App.css';
import Mypage from './MainPage/Mypage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        {/* 임시데이터 */}
          <Route path="/" element={<Mypage props={"Aatrox"}/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
