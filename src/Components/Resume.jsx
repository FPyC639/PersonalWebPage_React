import React from 'react';
import PDFViewer from './PDFViewer';

const Resume = () => {
    const pdfUrl = './jose_serra_resume.pdf';

    return (
        <div className="Resume">
            <h1>PDF Viewer</h1>
            <PDFViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default Resume;
