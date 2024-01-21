import React from 'react';
import PDFViewer from './PDFViewer';

const Resume = () => {
    const pdfUrl = './jose_serra_resume.pdf';

    return (
        <div className="Resume">
            <PDFViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default Resume;
