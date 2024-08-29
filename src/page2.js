import React from 'react'
import { useParams } from 'react-router-dom';

const Page2 = () => {
    const params = useParams()
    const videoStyle = {
        width: '100%',
        maxWidth: '800px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <video 
                style={videoStyle} 
                controls 
                controlsList="nodownload" // This disables download option in most browsers
                disablePictureInPicture 
                onContextMenu={(e) => e.preventDefault()} // This prevents right-click download
            >
                <source src={`https://paula-be-production.up.railway.app/uploads${params.id}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Page2