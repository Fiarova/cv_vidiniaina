import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Notfound from './pages/Notfound';
import Portfolios from './pages/Portfolios';
import Contact from './pages/Contact';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competence" element={<Knowledges />} />
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
  