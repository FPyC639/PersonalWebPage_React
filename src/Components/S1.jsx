import React from 'react';
import HTMLViewer from './HTMLViewer';

const S1 = () => {
    const html1 =  '../Chapter4Section6VOPNumber1.html';

    return (
        <div className="HTML1" >
            <HTMLViewer htmlUrl={html1} />
        </div>
    );
};

export default S1;
