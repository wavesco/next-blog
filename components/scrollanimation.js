import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function ScrollAnimation({ children }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const springProps = useSpring({
    from: { transform: 'translateY(100px)', opacity: 0 },
    to: {
      transform: `translateY(${scrollY * 0.5}px)`,
      opacity: 1,
    },
    config: {
      tension: 75, // Adjust this value to control the speed of the animation
    },
  });

  return (
    <animated.div style={springProps}>
      {children}
    </animated.div>
  );
}

export default ScrollAnimation;
