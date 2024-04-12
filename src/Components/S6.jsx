import React from 'react';
import PDFViewer from './PDFViewer';


const S6 = () => {
    const pdf = './OrganicChemistry.pdf';

    return (
        <div className="HTML1" >
            <PDFViewer pdfUrl={pdf} />
        </div>
    );
};

export default S6;