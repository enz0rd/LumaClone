"use client";
import { RandomBg } from "@/components/Background/RandomBg";
import EventForm from "@/components/CreateEvent/EventForm/EventForm";
import ImageSelection from "@/components/CreateEvent/ImageSelection/ImageSelection";
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

  const [colors, setColors] = useState<string>("#212121");

  return (
    <>
        <div className="z-[-1] fixed top-0 left-0 right-0 bottom-0">
            <div 
                className="w-full h-full" 
                style={{ opacity: 0.1, backgroundColor: colors }}
            />
        </div>
      <Header isSignedIn={isSignedIn} />
      <main>
        {!isSignedIn ? (
          ""
        ) : (
          <div className="flex flex-row gap-2 justify-center w-full">
            <ImageSelection returnImageColors={setColors} />
            <EventForm />
          </div>
        )}
      </main>
    </>
  );
}
