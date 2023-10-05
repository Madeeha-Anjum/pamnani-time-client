import React from "react";
import { twMerge as tailwindMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <>
      <div
        className={tailwindMerge("w-full max-w-md mx-auto", className ?? "")}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
