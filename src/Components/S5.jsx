import React from 'react';
import PDFViewer from './PDFViewer';


const S5 = () => {
    const pdf = './CalculatingLimits.pdf';

    return (
        <div className="HTML1" >
            <PDFViewer pdfUrl={pdf} />
        </div>
    );
};

export default S5;
