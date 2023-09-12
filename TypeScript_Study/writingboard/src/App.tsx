import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import QuestBoard from './component/QuestBoard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* 메인페이지 */}
          <Route path='/' element={<MainPage />} />
          {/* 질문게시판 */}
          <Route path='/questboard' element={<QuestBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
