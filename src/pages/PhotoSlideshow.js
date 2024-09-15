import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import photo1 from '../icons/pic.jpg';
import photo2 from '../icons/pic.jpg';
import photo3 from '../icons/pic.jpg';

const photos = [photo1, photo2, photo3];

const PhotoSlideshow = () => {
  const [index, setIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  
  const slideAnimation = useSpring({
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0%)' },
    reset: true,
    reverse: false,
    config: { tension: 220, friction: 120 },
  });

  return (
    <div className="relative w-64 h-5 overflow-hidden"> 
      {photos.map((photo, i) => (
        i === index && (
          <animated.div
            key={i}
            style={slideAnimation}
            className="absolute top-0 left-0 "
          >
            <img
              src={photo}
              alt={`Slide ${i}`}
              className="w-full h-full object-contain" 
            />
          </animated.div>
        )
      ))}
    </div>
  );
};

export default PhotoSlideshow;
