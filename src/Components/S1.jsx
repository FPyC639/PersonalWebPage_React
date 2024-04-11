import React from 'react';
import PDFViewer from './PDFViewer';

const S1 = () => {
    const html1 =  './Chapter4Section6VOPNumber1.html';

    return (
        <div className="HTML1" >
            <PDFViewer pdfUrl={html1} />
        </div>
    );
};

export default S1;
