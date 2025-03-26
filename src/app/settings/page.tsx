'use client'
import { RandomBg } from "@/components/Background/RandomBg";
import { Header } from "@/components/Header";
import { SettingsForm } from "@/components/Settings/SettingsForm";
import { api } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Page() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const { t } = useTranslation();
    document.title = t("titles.accountSettings");
    
    const router = useRouter();

    useEffect(() => {
        if(!isSignedIn) {
        const validateToken = async () => {
                if(localStorage.getItem("token")) {
                    const resp = await api.get("/api/auth/validate-token", {})
                    if(resp.status === 200) {
                        setIsSignedIn(true);
                    } else {
                        localStorage.removeItem("token");
                        router.push("/signin");
                    }
                }
            };
            validateToken();
        }
        return;
    }, [isSignedIn]);

    return (
        <>
            <RandomBg />
            <Header isSignedIn={true}/>
            <>
                <SettingsForm />
            </>
        </>
    )
}