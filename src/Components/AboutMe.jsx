import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src="images/self_portrait.png" alt="Self Portrait" className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <p className="p-bold">
                        Jose M Serra Jr is a young Hispanic, Latino aspiring to do a great impact in the fields of Computer Science, Data Science, and Medicine. Currently Jose works as a Software Engineering Intern at Panasonic Corporation of North America. Causes that Jose supports is human welfare by often times volunteering year-round by donating blood with New York Blood Center and Vitalant as well as participating in Q&A sites like StackOverflow, and Math Stack Exchange for helping answers questions. As well as an active participant on Brainly. I answer some post-secondary Q&A questions on CareerVillage.org helping individuals in their journeys in academia. Jose currently holds an associate degree in physical science and a Bachelors of Arts in Mathematical Sciences with a concentration in Data Analytics. Currently, Jose is pursuing a Master's of Data Science at New Jersey Institute of Technology.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
