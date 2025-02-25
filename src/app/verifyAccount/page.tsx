"use client";

import { RandomBg } from "@/components/Background/RandomBg";
import { Header } from "@/components/Header";
import OtpLogin from "@/components/SignIn/OtpLogin";

export default function Page() {
  return (
    <>
      <RandomBg />
      <Header logoStyle="wordmark" />
      <main>
        <OtpLogin />
      </main>
    </>
  );
}
