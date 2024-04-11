import React from 'react';

const HTMLViewer = ({ htmlUrl }) => {
    return (
        <div className="html-viewer" style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <iframe
                src={htmlUrl}
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
                sandbox="allow-scripts allow-same-origin"
                title="HTML Content"
            />
        </div>
    );
};

export default HTMLViewer;
