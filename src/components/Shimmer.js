import React from "react";
import "../../Shimmer.css";

const Shimmer = ({ width, height, borderRadius }) => {
  return (
    <div className="shimmer-wrapper" style={{ width, height, borderRadius }}>
      <div className="shimmer"></div>
    </div>
  );
};

export default Shimmer;
