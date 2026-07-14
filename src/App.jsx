import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Tracker from './pages/Tracker.jsx';
import Recipes from './pages/Recipes.jsx';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Tracker />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
