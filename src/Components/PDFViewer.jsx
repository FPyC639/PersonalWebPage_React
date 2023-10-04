import React from 'react';

const PDFViewer = ({ pdfUrl }) => {
    return (
        <div className="pdf-viewer">
            <iframe
                src={pdfUrl}
                title="Resume"
                width="100%"
                height="500px"
                frameBorder="0"
            ></iframe>
        </div>
    );
};

export default PDFViewer;
