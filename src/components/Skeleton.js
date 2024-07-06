import React from 'react';
import '../Skeleton.css'; // CSS for styling the skeleton

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-item">API is not for deployment</div>
      <div className="skeleton-item">API is not for deployment</div>
      <div className="skeleton-item">API is not for deployment</div>
      <div className="skeleton-item">API is not for deployment</div>
    </div>
  );
};

export default Skeleton;