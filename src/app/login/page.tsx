import Logo from "@/components/icons/Logo";

import React from "react";
import sleep from "@/utils/sleep";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import LoginForm from "./LoginForm";
import Api from "@/api/Api";

export const dynamic = 'force-dynamic'

const loadUsernames = async () => {
  return await Api.getAllUsernames().then((response) => response.data);
};

const Page: React.FC = async () => {
  const [usernames, ...rest] = await Promise.all([loadUsernames(), sleep(500)]);

  return (
    <>
      <div className="container flex flex-col justify-center min-h-screen px-5 py-5 mx-auto">
        <Container className="">
          <section className="space-y-5">
            <div className="mx-auto w-14">
              <Logo />
            </div>
            <div className="text-4xl font-bold text-center text-primary">
              Timeey
            </div>
            <div className="mt-3 text-2xl font-semibold text-center">Login</div>
          </section>
          <section className="mt-12 space-y-1">
            <LoginForm usernames={usernames} />
          </section>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Page;
