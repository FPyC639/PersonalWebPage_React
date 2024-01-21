import React from 'react';
import './MainPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
/*import Carousel from './Carousel';
import './Carousel.css'*/

const MainPage = () => {


    /*const images = [
        'PCCC.jpg',
        'Kean.jpg',
    ];*/

    return (
        <div>
            <h1 className="Welcome-indent">Welcome!</h1>
            {/* Add your main page content here */}
            <div className="flex-container">
                <p className="p-indent10px">
                    A quote by Walt Disney that keeps Jose going every day goes a bit like this: "We keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths." - Walt Disney This is a quote from a popular movie that Jose used to watch called Meet the Robinson's that inspires Jose and sets him off on his journey to find his passion and career.  A key lesson from the movie that inspires Jose is the impact the past has on our future. Jose has also been impacted deeply by a philosophical course that was taken on a brief semester stay at Seton Hall University called Journey of Transformation. In that course he came to understand that we are all on a journey going through a metamorphosis from who we once were to the individual we intend to become. It is reminiscent of authors like Paulo Ceulho and another favorite text called Alchemist where our heart truly knows where our personal legend is in this mirage we call life. With this in hand Jose values and keeps in mind values such as family, home, and well-being. While attending higher education Jose found a passion in giving hope to people's lives by helping them through activities of kindness. Jose found passion and applied his gifts in grit, determination, and persistence. Jose keeps moving forward to find whatever the peril to move forward and carry on. 
                </p>
            </div>
            {/*<div style={{ height: '200px' }} />*/}
            {/*<Carousel images={images} />*/}
            <div style={{height:'200px'} }/>
            <div className="flex-container">
                <div className="row">
                    <div className="col" style={{ textAlign: 'center' }}>
                        Kean University
                    </div>
                    <div className="col">
                        At Kean University I pursued a Bachelor of Arts in Mathematics where I took courses in line with a Data Analytics Option. Courses I focused on were based on Statistics, Data Analytics, Machine Learning, and Computer Science. I took additional courses such as Proofs, and general education classes. While at Kean University I took independent studies such as Graph Theory and Data Mining with R. 
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{ textAlign: 'center' }}>
                        Passaic County Community College
                    </div>
                    <div className="col">
                        At Passaic County Community College, I pursued an Associate of Science in Physical Science taking courses on the spectrum of Single Variable Calculus, Multivariable Calculus, Differential Equations, as well as Physics and Chemistry courses. Here I would intern at Kean University in a Spectroscopy Laboratory in the Department of Chemistry learning Deep Learning and essential lab skills.
                    </div>
                </div>
            </div>
            <div style={{ height: '200px' }} />
        </div>      
    );
}

export default MainPage;
