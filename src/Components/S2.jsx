import React from 'react';
import PDFViewer from './PDFViewer';

const S2 = () => {
    const pdf = './Chapter4Section6VOPNumber2.pdf';

    return (
        <div className="HTML1" >
            <PDFViewer pdfUrl={pdf} />
        </div>
    );
};

export default S2;
