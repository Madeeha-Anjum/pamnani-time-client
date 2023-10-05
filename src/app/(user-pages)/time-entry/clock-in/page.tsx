import React from "react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import ClockInButton from "./ClockInButton";
import Clock from "@/components/Clock";

const Page: React.FC = async () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-full">
        <Container>
          <div className="text-center">Current Time (Edmonton)</div>
          <div className="mt-1 text-2xl font-bold text-center text-primary">
            <Clock />
          </div>

          <div className="w-full mt-8">
            <ClockInButton />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
