import React from "react";
import Banana from "./icons/Banana";

const LoadingBanana: React.FC = () => {
  return (
    <>
      <div className="w-full h-full bg-secondary rounded-full border-2 border-secondary animate-banana">
        <div className=" p-[15%]">
          <Banana />
        </div>
      </div>
    </>
  );
};

export default LoadingBanana;
