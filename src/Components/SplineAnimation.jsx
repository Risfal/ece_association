import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const Animation = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/dpANmJDAzIP5EdUd/scene.splinecode');
    return () => {
      
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      <canvas id="canvas3d" />
    </div>
  );
};

export default Animation;
