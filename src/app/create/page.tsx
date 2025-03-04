'use client'
import { RandomBg } from "@/components/Background/RandomBg";
import { Header } from "@/components/Header";
import { SignIn } from "@/components/SignIn/SignIn";
import { api } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function Page() {
  document.title = "Criar evento ∙ Luma";

  const router = useRouter();

  const [isSignedIn, setIsSignedIn] = useState(false);
  const hasChecked = useRef(false);

  useEffect(() => {
    const validateToken = async () => {
      if (hasChecked.current) return;
      
      if (localStorage.getItem("token")) {
        const resp = await api.get("/api/auth/validate-token", {});
        if (resp.status === 200) {
          setIsSignedIn(true);
        } else {
          localStorage.removeItem("token");
          router.push("/signin");
        }
      }
      hasChecked.current = true;
    };

    validateToken();
  }, []);

  return (
    <>
      <RandomBg />
      {!isSignedIn ? (
        <div className="w-full absolute z-[999] flex items-center justify-center">
          <Header logoStyle="wordmark" isSignedIn={isSignedIn} />
        </div>
      ) : (
        <Header isSignedIn={isSignedIn} />
      )}
      <main>
        {!isSignedIn ? (
          <div className="absolute z-[999] w-full h-screen bg-[rgba(0,0,0,.5)] flex items-center justify-center">
            <SignIn />
          </div>
        ) : (
          ""
        )}
        <div>Teste</div>
      </main>
    </>
  );
}
