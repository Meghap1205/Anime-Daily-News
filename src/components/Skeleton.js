import React from 'react';
import '../Skeleton.css'; // CSS for styling the skeleton

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
    </div>
  );
};

export default Skeleton;