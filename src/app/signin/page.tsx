'use client'
import { RandomBg } from "@/components/Background/RandomBg";
import { Header } from "@/components/Header";
import { SignIn } from "@/components/SignIn/SignIn";
import { useTranslation } from "react-i18next";

export default function Page() {
  const { t } = useTranslation();

  document.title = t("titles.signIn");

  return (
    <>
      <RandomBg />
      <Header logoStyle="wordmark" />
      <main>
        <SignIn />
      </main>
    </>
  );
}
