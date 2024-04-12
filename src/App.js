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
import S1 from './Components/S1';
import S2 from './Components/S2';
import S3 from './Components/S3';
import S4 from './Components/S4';
import S5 from './Components/S5';
import S6 from './Components/S6';

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
                    <Route path="/S1" element={<S1 />} />
                    <Route path="/S2" element={<S2 />} />
                    <Route path="/S3" element={<S3 />} />
                    <Route path="/S4" element={<S4 />} />
                    <Route path="/S5" element={<S5 />} />
                    <Route path="/S6" element={<S6 />} />
                    <Route path="/Chapter4Section6VOPNumber1.pdf" />
                    <Route path="/Chapter4Section6VOPNumber2.pdf" />
                    <Route path="/Chapter4Section6VOPNumber3.pdf" />
                    <Route path="/Chapter8Section2Number1.pdf" />
                    <Route path="/CalculatingLimits.pdf" />
                    <Route path="/OrganicChemistry.pdf" />
                </Routes>
            </Router>
        </>
    );
}

export default App;
