'use client'
import { RandomBg } from "@/components/Background/RandomBg";
import { Header } from "@/components/Header";
import { SignIn } from "@/components/SignIn/SignIn";

export default function Page() {
  document.title = "Entrar ∙ Luma";

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
