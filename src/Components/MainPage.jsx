import React from 'react';
import './MainPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel';
import './Carousel.css'

const MainPage = () => {


    const images = [
        'PCCC.jpg',
        'Kean.jpg',
    ];

    return (
        <div>
            <h1 className="Welcome-indent">Welcome!</h1>
            {/* Add your main page content here */}
            <div className="flex-container">
                <p className="p-indent10px">
                    "We keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths." - Walt Disney
                    This is a quote from Meet the Robinson's that inspires Jose and set him off on his journey to find his passion and career. On our Journey of Transformation we understand that we go through a metamorphosis from who we once were to the individual we intend to become. With this in hand Jose values and keeps in mind values such as family, home, and well-being as when his curiosity lead him to college campus. Other values such as giving hope to people's lives by helping them through activities of kindness. Jose found passion apply his gifts in grit, determination, and persistence Jose hazard zet forward to find whatever the peril to move forward and carryon. 

                </p>
            </div>
            <Carousel images={images} />
        </div>
    );
}

export default MainPage;
