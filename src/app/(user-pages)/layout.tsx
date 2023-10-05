import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container grid min-h-screen px-5 py-5 mx-auto grid-rows-pancake">
        <section>
          <Header />
          <Nav />
        </section>
        <section>{children}</section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Layout;
