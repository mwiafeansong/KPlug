'use client';
import ReactPlayer from 'react-player/youtube';
import { useState, useEffect } from 'react';

const VideoPlayer = ({ trailer }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative pt-[58%] w-full">
      {isClient && (
        <ReactPlayer
          url={trailer}
          controls={true}
          width="90%"
          style={{
            backgroundColor: 'black',
            margin: 'auto',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            maxWidth: '800px',
          }}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
