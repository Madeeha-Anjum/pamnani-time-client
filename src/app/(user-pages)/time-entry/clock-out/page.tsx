import Button from "@/components/Button";
import Container from "@/components/Container";
import TextInput from "@/components/TextInput";
import React from "react";
import ClockOutForm from "./ClockOutForm";

const Page: React.FC = async () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-full">
        <Container>
          <ClockOutForm />
        </Container>
      </div>
    </>
  );
};

export default Page;
