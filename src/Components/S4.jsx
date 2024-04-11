import React from 'react';
import PDFViewer from './PDFViewer';

const S4 = () => {
    const html1 =  './Chapter8Section2VOPNumber1.html';

    return (
        <div className="HTML1" >
            <PDFViewer pdfUrl={html1} />
        </div>
    );
};

export default S4;
