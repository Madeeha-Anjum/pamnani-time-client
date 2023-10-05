"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav: React.FC = () => {
  const pathname = usePathname();

  const baseLinkClassNames =
    "text-center pb-2 border-b-2 border-black transition";

  const inactiveLinkClassNames = `${baseLinkClassNames} border-transparent hover:border-black`;
  const activeLinkClassNames = `${baseLinkClassNames} text-center pb-2 border-b-2 border-black`;

  const classNames = (path: string) => {
    return pathname.startsWith(path)
      ? activeLinkClassNames
      : inactiveLinkClassNames;
  };

  return (
    <>
      <nav className="my-6">
        <ul className="grid grid-cols-2 gap-3">
          <Link href="/time-entry">
            <li className={classNames("/time-entry")}>Time Entry</li>
          </Link>
          <Link href="/history">
            <li className={classNames("/history")}>History</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
