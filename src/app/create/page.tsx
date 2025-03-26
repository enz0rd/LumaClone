"use client";
import { RandomBg } from "@/components/Background/RandomBg";
import { Header } from "@/components/Header";
import { SignIn } from "@/components/SignIn/SignIn";
import { Welcome } from "@/components/Welcome/Welcome";
import { api } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Page() {
  const { t } = useTranslation();
  document.title = t("titles.createEvent");

  const router = useRouter();

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      // Garantir que a validação só aconteça uma vez
      if (hasChecked) return;

      if (localStorage.getItem("token")) {
        const resp = await api.get("/api/auth/validate-token", {});
        if (resp.status === 200) {
          setIsSignedIn(true);
        } else {
          localStorage.removeItem("token");
          router.push("/signin");
        }
      } else {
        router.push("/signin");
      }

      setHasChecked(true); // Agora, após a validação, podemos marcar como "verificado"
    };

    validateToken();
  }, [hasChecked, router]); // Coloque `router` na dependência para evitar possíveis problemas

  return (
    <>
      <RandomBg />
      <Header isSignedIn={isSignedIn} />
      <main>
        {!isSignedIn ? (
          <div className="fixed inset-0 z-[999] bg-[rgba(0,0,0,.5)] flex items-center justify-center">
            <SignIn />
          </div>
        ) : (
          <div>Teste</div>
        )}
      </main>
    </>
  );
}
