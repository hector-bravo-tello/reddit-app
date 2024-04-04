import React from 'react';

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;