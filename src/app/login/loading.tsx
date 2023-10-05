import LoadingBanana from "@/components/LoadingBanana";
import Banana from "@/components/icons/Banana";
import React from "react";

const Loading: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-24">
          <LoadingBanana />
        </div>
      </div>
    </>
  );
};

export default Loading;
