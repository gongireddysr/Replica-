import React, { useEffect } from 'react';
import './Particle.css';

const Particle: React.FC = () => {
  useEffect(() => {
    // Particle animation logic will go here
  }, []);

  return (
    <div id="particles-js" className="particles-container">
      {/* Particles will be rendered here */}
    </div>
  );
};

export default Particle; 