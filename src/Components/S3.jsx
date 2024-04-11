import React from 'react';
import HTMLViewer from './HTMLViewer';

const S3 = () => {
    const html1 = '../Chapter4Section6VOPNumber3.html';

    return (
        <div className="HTML1" >
            <HTMLViewer htmlUrl={html1} />
        </div>
    );
};

export default S3;
