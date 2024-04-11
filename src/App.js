import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import Resume from './Components/Resume';
import MainPage from './Components/MainPage';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';


function App() {
    return (
        <>

            <Router>
                <NavBar /> {/* Move the NavBar outside of the Routes */}
                <Routes>
                    <Route path="/" element={<MainPage />} /> {/* Use "element" instead of "component" */}
                    <Route path="/AboutMe" element={<AboutMe />} />
                    <Route path="/Resume" element={<Resume />} />
                    <Route path="/Projects" element={<Projects /> } />
                    <Route path="/jose_serra_resume.pdf" />
                    <Route path="/ContactMe" element={<ContactMe />} />
                    <Route path="/Chapter4Section6VOPNumber1.html" />
                    <Route path="/Chapter4Section6VOPNumber2.html" />
                    <Route path="/Chapter4Section6VOPNumber3.html" />
                    <Route path="/Chapter8Section2Number1.html" />
                </Routes>
            </Router>
        </>
    );
}

export default App;
