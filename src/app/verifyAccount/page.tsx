"use client";

import { RandomBg } from "@/components/Background/RandomBg";
import { Header } from "@/components/Header";
import OtpLogin from "@/components/SignIn/OtpLogin";
import { Welcome } from "@/components/Welcome/Welcome";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Page() {
  const { t } = useTranslation();

  document.title = t("titles.verifyAccount");

  const [welcome, setWelcome] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if(welcome) {
      setTimeout(() => {
        router.push("/create");
      }, 3000);
    }
  }, [welcome])

  return (
    <>
      <RandomBg />
      <Header logoStyle="wordmark" />
      <main>
        {welcome ? (
          <Welcome />
        ) : (
          <OtpLogin setWelcome={setWelcome}/>
        )}
      </main>
    </>
  );
}
