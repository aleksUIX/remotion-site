import React from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';

const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  return (
    <div style={{ flex: 1, backgroundColor: 'black', color: 'white' }}>
      <h1>Hello from MyComposition!</h1>
      <p>Current frame: {frame}</p>
      <p>Current time: {(frame / fps).toFixed(2)} seconds</p>
    </div>
  );
};

export default MyComposition;
