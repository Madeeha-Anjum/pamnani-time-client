import { redirect } from "next/navigation";
import React from "react";
import TimeEntryRouter from "./TimeEntryRouter";

const Page: React.FC = async () => {
  return <TimeEntryRouter />;
};

export default Page;
