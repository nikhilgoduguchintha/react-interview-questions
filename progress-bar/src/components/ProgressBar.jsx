import React, { useState, useEffect } from "react";
const ProgressBar = ({ value = 0 }) => {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <div className="progress">
      <span style={{color: percent > 49 ? 'white' : ''}}>
        {percent.toFixed()}%
      </span>
      <div className="bar" style={{width: `${percent}%`}}></div>
    </div>
  );
};

export default ProgressBar;
