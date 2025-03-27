import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import CalendarSelection from "./CalendarSelection";

export default function LumaPlus() {
  const { t } = useTranslation();

  return (
    <div className="my-8 pt-8 border-t w-full dark:border-zinc-800 border-zinc-200">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          {t("Settings.payment.lumaPlus.title")}
        </h1>
        <Link href="/pricing">
          <Button
            className="flex gap-2 items-center 
          dark:bg-zinc-800 dark:hover:bg-zinc-400 dark:hover:text-zinc-700
          bg-zinc-200 hover:bg-zinc-600 hover:text-zinc-300
          px-4 py-[.2rem] rounded-lg text-zinc-500"
          >
            <span className="text-base">{t("Settings.payment.lumaPlus.learnMore")}</span>
            <ArrowUpRight size={16} />
          </Button>
        </Link>
      </div>
      <span className="text-md text-zinc-800 dark:text-zinc-300 text-md">
      {t("Settings.payment.lumaPlus.description")}
      </span>
      <CalendarSelection />
      <span className="text-md text-zinc-800 dark:text-zinc-300 text-md">
      {t("Settings.payment.lumaPlus.span")}
      </span>
    </div>
  );
}
