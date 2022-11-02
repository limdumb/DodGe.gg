import './App.css';
import Mypage from './MainPage/Mypage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Mypage/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
