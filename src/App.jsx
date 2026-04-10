import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import PlayQuiz from './pages/PlayQuiz';
import Multiplayer from './pages/Multiplayer';
import Leaderboard from './pages/Leaderboard';
import Admin from "./pages/Admin";
import './index.css';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/play" element={<PlayQuiz />} />
          <Route path="/multiplayer" element={<Multiplayer />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;