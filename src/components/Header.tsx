"use client";

import React, { useEffect, useState } from "react";
import Logo from "./icons/Logo";
import LogoutButton from "./LogoutButton";
import { getCookie } from "cookies-next";
import UserCredentials from "@/models/UserCredentials";

const parseUserCredentialsCookie = (
  userCredentialsCookie: string | undefined
) => {
  if (userCredentialsCookie === undefined) {
    return null;
  }

  return JSON.parse(userCredentialsCookie) as UserCredentials;
};

const Header: React.FC = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userCredentialsCookie = getCookie("user-credentials");
    const userCredentials = parseUserCredentialsCookie(userCredentialsCookie);

    if (userCredentials) {
      setUsername(userCredentials.username);
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <div className="w-14">
          <Logo />
        </div>

        <div>
          <LogoutButton />
        </div>
      </div>
      <div className="mt-3">
        <div className="text-2xl font-bold text-center">{username}</div>
      </div>
    </div>
  );
};

export default Header;
