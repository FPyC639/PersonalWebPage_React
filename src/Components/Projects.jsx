import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Projects = () => {
    return (
        <div className="container">
            <p>
                This section contains projects that I have been working on including a handpicked variety of Data Science projects that include skills such as Feature Engineering, Computer Vision, and other Artificial Intelligence subfields. Projects I have done as well include a variety of Computer Science topics just as coding in Assembly Language, Java, Python, PowerShell, and etc. These topics are illustrated in the various repositories I have constructed on GitHub. Currently, I am working on several projects and actively improving my skills as a Data Scientist, and a Software Engineer. What I have learned on and off the field of academia and research.
            </p>
            <div className="row">
                <div className="col">
                    <p>Mobile DNA Web Scraper in Various Languages</p>
                </div>
                <div className="col">
                    <ul>
                        <li>
                            <a href="https://github.com/FPyC639/Mobile_DNA_Web_Scrape">C#</a>
                        </li>
                        <li>
                            <a href="https://github.com/FPyC639/Mobile_DNA_Java_WebScrape">Java</a>
                        </li>
                        <li>
                            <a href="https://github.com/FPyC639/Mobile_DNA_BS4_WebScrape">Python</a>
                        </li>
                        <li>
                            <a href="https://github.com/FPyC639/Mobile_DNA_R_Web_Scrape">R</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>
                        Artificial Intelligence (General)
                    </p>
                </div>
                <div className="col">
                    <ul>
                        <li>
                            <a href="https://github.com/FPyC639/MNIST_Image_Recognition">MNIST Image Recognition</a>
                        </li>
                        <li>
                            <a href="https://github.com/FPyC639/Kaggle_Titanic_Artifical_Intelligence">Kaggle Titanic Artifical Intelligence</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>
                        Differential Equations and Advanced Calculus
                    </p>
                </div>
                <div className="col">
                    <ul>
                        <li>
                            <a href="/S1"> Variation of Parameters Example 1</a>
                        </li>
                        <li>
                            <a href="/S2"> Variation of Parameters Example 2</a>
                        </li>
                        <li>
                            <a href="/S3"> Variation of Parameters Example 3</a>
                        </li>
                        <li>
                            <a href="/S4"> Systems of Differential Equations</a>
                        </li>
                        <li>
                            <a href="/S5">Limits</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>
                        Organic Chemistry MCAT Flashcards
                    </p>
                </div>
                <div className="col">
                    <ul>
                        <li>
                            <a href="/S6">Organic Chemistry Flashcards Sample</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Indeed URL Converter
                </div>
                <div className="col">
                    <ul>
                        <li>
                            <a href="/IndeedURL_Converter">Indeed URL Converter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  );
}

export default Projects;