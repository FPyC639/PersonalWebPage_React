import React from 'react';

const PDFViewer = ({ pdfUrl }) => {
    return (
         <div className="pdf-viewer"  style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <iframe
        src={pdfUrl} // Replace with the URL of your PDF file
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        title="Resume"
      />
    </div>
    );
};

export default PDFViewer;
