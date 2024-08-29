import React from 'react'

const Page2 = () => {
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
                <source src="https://www.youtube.com/watch?v=s2kx8UOqFOs&list=RDs2kx8UOqFOs&start_radio=1" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Page2