import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-start flex-wrap space-x-8">
          <div>
            <Image src="/sasquatch.svg" width="370" height="479" alt="image" />
          </div>
          <div className="mt-16 space-y-3">
            <div className="font-bold text-8xl">404</div>
            <div className="font-bold text-4xl">
              You Were Not Supposed To See This
            </div>
            <div className="text-xl">
              Let&apos;s get you back{" "}
              <Link
                href="/"
                className="text-secondary underline font-bold px-2"
              >
                Home
              </Link>{" "}
              before anyone notices
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
