'use client'
import { RandomBg } from "@/components/Background/RandomBg"
import { Header } from "@/components/Header"
import { useTranslation } from "react-i18next";

export default function Page() {
    const { t } = useTranslation();
    document.title = t("titles.homeAuthenticated");
    return (
        <>
            <RandomBg />
            <Header isSignedIn={true} />
            <h1>Home</h1>
        </>
    )
}