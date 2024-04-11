import React from 'react';
import PDFViewer from './PDFViewer';

const S3 = () => {
    const html1 = './Chapter4Section6VOPNumber3.html';

    return (
        <div className="HTML1" >
            <PDFViewer pdfUrl={html1} />
        </div>
    );
};

export default S3;
