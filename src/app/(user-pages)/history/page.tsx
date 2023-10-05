import React from "react";
import HistoryRow from "./HistoryRow";
import HistoryContainer from "./HistoryContainer";

const Page: React.FC = async () => {
  return (
    <>
      {/* <div className="max-w-md mx-auto border px-5">
        {Array.from(Array(10).keys()).map((i) => (
          <div
            key={i}
            className="py-5  border-b last:border-b-0 border-b-slate-200"
          >
            <HistoryRow />
          </div>
        ))}
      </div> */}
      <HistoryContainer />
    </>
  );
};

export default Page;
