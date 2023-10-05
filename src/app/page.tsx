import Image from "next/image";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  if (cookies().get("user-credentials")) {
    redirect("/time-entry");
  } else {
    redirect("/login");
  }
}
