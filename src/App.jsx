import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Publications from './pages/Publications';
import About from './pages/About';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
