import QueryContextProvider from "@/store/queryContext";
import "./globals.css";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timeey",
  description: "Created by @Madeeha-Anjum",
  viewport: "width=device-width, initial-scale=1",
  keywords: "Time collection app",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <QueryContextProvider>{children}</QueryContextProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            success: {
              className: "!text-primary border-2 border-primary",
              iconTheme: {
                primary: "#635DFF",
                secondary: "#fff",
              },
            },
            error: {
              className: "!text-secondary border-2 border-secondary",
              iconTheme: {
                primary: "#FFA000",
                secondary: "#fff",
              },
            },
            loading: {
              className: "!text-black border-2 border-black",
            },
          }}
        />
      </body>
    </html>
  );
}
