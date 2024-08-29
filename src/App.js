import logo from './logo.svg';
import './App.css';
import Page1 from './page1';
import Page2 from './page2';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/video/uploads/:id" element={<Page2 />} />
        </Routes>
    </Router>
  );
}

export default App;
