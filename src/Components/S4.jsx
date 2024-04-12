import React from 'react';
import PDFViewer from './PDFViewer';


const S4 = () => {
    const pdf =  './Chapter8Section2Number1.pdf';

    return (
        <div className="HTML1" >
            <PDFViewer pdfUrl={pdf} />
        </div>
    );
};

export default S4;
