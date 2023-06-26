import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GlowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
`;

const GlowEffect = styled.div`
  position: absolute;
  top: -400px;
  left: -400px;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(600px, rgba(34, 61, 40, 0.24), transparent 40%);
`;

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <GlowContainer style={{ top: position.y, left: position.x }}>
      <GlowEffect />
    </GlowContainer>
  );
};

export default MouseGlow;
