import React from 'react';
import PDFViewer from './PDFViewer';

const S2 = () => {
    const html1 = './Chapter4Section6VOPNumber2.html';

    return (
        <div className="HTML1" >
            <PDFViewer pdfUrl={html1} />
        </div>
    );
};

export default S2;
