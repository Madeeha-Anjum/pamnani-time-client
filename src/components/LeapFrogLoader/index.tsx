import React from "react";
import "./index.css";

const index: React.FC = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute -translate-x-10">
          <div className="leap-frog">
            <div className="leap-frog__dot"></div>
            <div className="leap-frog__dot"></div>
            <div className="leap-frog__dot"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
