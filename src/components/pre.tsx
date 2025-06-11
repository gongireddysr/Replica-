import React from 'react';

interface PreloaderProps {
  Load: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ Load }) => {
  return (
    <div id={Load ? "preloader" : "preloader-none"}>
      <div className="loader">
        <div className="loader-inner"></div>
      </div>
    </div>
  );
};

export default Preloader;
