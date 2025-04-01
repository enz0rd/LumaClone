'use client'
import "./home.css";
import Link from "next/link";
import { Header } from "@/components/Header";
import { RandomBg } from "@/components/Background/RandomBg";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  document.title = t("titles.home");
  const theme = localStorage.getItem("theme") || "light";

  return (
    <div className="">
      <RandomBg />
      <Header />
      <main className="flex flex-col mt-5 md:flex-row mx-auto max-w-[1280px] lg:flex-row lg:p-5 gap-5 lg:gap-0 md:gap-0 items-center justify-between">
        <div className="flex flex-col items-center md:items-start px-6 lg:items-start gap-4 w-[30rem]">
          <img
            alt="luma logo"
            className="w-[20%] opacity-50"
            src={
              theme === "light"
                ? "/Luma/wordmark-dark.png"
                : "/Luma/wordmark-light.png"
            }
          />
          <h1 className="w-[90%] font-medium text-center lg:text-left md:text-left text-4xl md:text-6xl lg:text-6xl flex flex-col">
            <span className="w-[100%] lg:w-[70%] text-zinc-800 dark:text-zinc-50 text-wrap">{t("landingPage.enchantingEvents")}</span>
            <span className="w-[100%] lg:w-[70%] text-wrap text-transparent bg-gradient-homepage">
            {t("landingPage.startHere")}
            </span>
          </h1>
          <p className="text-zinc-400 text-semibold text-center lg:text-left lg:w-[70%] w-[80%] text-xl">
          {t("landingPage.p")}
          </p>
          <Link href={'/create'} className="mt-5 text-lg font-semibold text-zinc-100 dark:text-zinc-900 bg-zinc-950 dark:bg-zinc-50 rounded-lg px-3 py-2 hover:brightness-75 transition">{t("landingPage.createEvent")}</Link>
        </div>
        <video className="w-[80%] md:w-[37rem] lg:w-[37rem]" loop muted controls={false} autoPlay><source src="/phone-dark.webm" type="video/webm" /></video>
      </main>
      <Footer />
    </div>
  );
}
