import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import Resume from './Components/Resume';
import MainPage from './Components/MainPage';

function App() {
    return (
        <>

            <Router>
                <NavBar /> {/* Move the NavBar outside of the Routes */}
                <Routes>
                    <Route path="/" element={<MainPage />} /> {/* Use "element" instead of "component" */}
                    <Route path="/AboutMe" element={<AboutMe />} />
                    <Route path="/Resume" element={<Resume />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
