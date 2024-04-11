import React from 'react';

const S4 = () => {
    const html1 = './Chapter8Section2VOPNumber1.html';

    return (
        <div className="HTML1">
            <iframe src={html1}
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                }}></iframe>
        </div>
    );
};

export default S4;
