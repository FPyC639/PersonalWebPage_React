import React from 'react';
import HTMLViewer from './HTMLViewer';


const S4 = () => {
    const html1 =  '../Chapter8Section2VOPNumber1.html';

    return (
        <div className="HTML1" >
            <HTMLViewer htmlUrl={html1} />
        </div>
    );
};

export default S4;
