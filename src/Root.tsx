import React from 'react';
import { Composition } from 'remotion';
import Basic from './Compositions/Basic';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Basic"
        component={Basic}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
