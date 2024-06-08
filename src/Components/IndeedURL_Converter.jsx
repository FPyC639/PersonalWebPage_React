import React, { useState } from 'react';
import { saveAs } from 'file-saver';

function IndeedURL_Converter() {
    const [urls, setUrls] = useState([]);
    const [inputUrl, setInputUrl] = useState('');

    const handleInputChange = (event) => {
        setInputUrl(event.target.value);
    };

    const handleAddUrl = () => {
        if (inputUrl) {
            setUrls([...urls, transformUrl(inputUrl)]);
            setInputUrl('');
        }
    };

    const transformUrl = (inputUrl) => {
        const url = new URL(inputUrl);
        const params = new URLSearchParams(url.search);
        const jobKey = params.get('vjk');
        return jobKey ? `https://www.indeed.com/viewjob?jk=${jobKey}` : 'Invalid URL';
    };

    const downloadUrls = () => {
        const blob = new Blob([urls.join('\n')], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'transformedUrls.txt');
    };

    return (
        <div>
            <h1>Indeed URL Transformer</h1>
            <input
                value={inputUrl}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter Indeed URL here"
            />
            <button onClick={handleAddUrl}>Add URL</button>
            <button onClick={downloadUrls} disabled={!urls.length}>Download URLs</button>
            <ul>
                {urls.map((url, index) => (
                    <li key={index}>{url}</li>
                ))}
            </ul>
        </div>
    );
}

export default IndeedURL_Converter;
