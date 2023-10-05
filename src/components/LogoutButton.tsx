"use client";
import React from "react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Button, { Kind } from "./Button";

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const onLogoutClick = () => {
    deleteCookie("user-credentials");
    router.push("/");
  };

  return (
    <>
      <Button onClick={onLogoutClick} kind={Kind.OUTLINE}>
        Logout
      </Button>
    </>
  );
};

export default LogoutButton;
