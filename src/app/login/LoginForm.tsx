"use client";
import Button from "@/components/Button";
import SelectInput from "@/components/SelectInput";
import TextInput from "@/components/TextInput";
import React, { useEffect, useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import sleep from "@/utils/sleep";
import { useMutation, useQuery } from "@tanstack/react-query";
import Api from "@/api/Api";
import toast from "react-hot-toast";

interface UserInput {
  username: string;
  password: string;
}

interface LoginFormProps {
  usernames: string[];
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const router = useRouter();
  const [userInput, setUserInput] = useState<UserInput>({
    username: "Pranav",
    password: "1234",
  });

  useEffect(() => {
    toast.success("Welcome to Timeey");
  }, []);

  const mutation = useMutation({
    mutationFn: Api.verifyCredentials,
    onMutate: async () => {
      const toastId = toast.loading("Logging in...");
      return { toastId };
    },
    onSuccess: async (data, variables, context) => {
      toast.success("Logged in successfully", { id: context?.toastId });
    },
    onError: async (error, variables, context) => {
      setUserInput((prev) => ({ ...prev, password: "" }));
      toast.error("Invalid credentials", { id: context?.toastId });
    },
  });

  const onLoginClick = async () => {
    try {
      await mutation.mutateAsync({ userCredentials: userInput });
    } catch (error) {
      console.log(error);
      return;
    }

    setCookie("user-credentials", userInput);
    router.push("/time-entry");
    console.log(userInput);
  };

  const options = [
    {
      label: "Select a user...",
      value: "",
    },
    ...props.usernames.map((username) => ({
      label: username,
      value: username,
    })),
  ];

  return (
    <>
      <div>
        <SelectInput
          label="User"
          id="user"
          name="username"
          options={options}
          value={userInput.username}
          onChange={(e) => {
            setUserInput((prev) => ({ ...prev, username: e.target.value }));
          }}
        />

        <TextInput
          label="Password"
          id="password"
          name="password"
          value={userInput.password}
          onChange={(e) =>
            setUserInput((prev) => ({ ...prev, password: e.target.value }))
          }
        />

        <div className="pt-5">
          <Button onClick={onLoginClick} isLoading={mutation.isLoading}>
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
