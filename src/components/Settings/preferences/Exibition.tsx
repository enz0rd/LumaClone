"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";
import { TbCircleCheckFilled } from "react-icons/tb";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n"

export function ExibitionSettings() {
  type Theme = {
    name: "system" | "light" | "dark";
  };
  const [chosenTheme, setChosenTheme] = useState<Theme>({ name: localStorage.getItem("theme") as Theme["name"] });
  const { setTheme } = useTheme();

  const handleSwitchTheme = (theme: Theme["name"]) => {
    setTheme(theme);
    setChosenTheme({ name: theme });
    localStorage.setItem("theme", theme);
  }

  const { t } = useTranslation();

  const handleChangeLanguage = (value: string) => {
    localStorage.setItem("language", value);
    i18n.changeLanguage(value);
  };

  return (
    <div className="mt-5 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">{t("Settings.preferences.exhibition.title")}</h1>
      </div>
      <span className="text-md text-zinc-800 dark:text-zinc-300">
      {t("Settings.preferences.exhibition.subtitle")}
      </span>
      <div className="flex gap-2 mt-5">
        <figure
          onClick={() => handleSwitchTheme("system")}
          className="w-fit rounded-lg overflow-hidden border border-zinc-400 dark:border-zinc-700 flex flex-col cursor-pointer group"
        >
          <Image
            src={"/Theme/display-system.jpg"}
            className={`w-[17rem] overflow-hidden rounded-t-lg ${
              chosenTheme.name == "system" ? "" : "saturate-0"
            } transition group-hover:saturate-100`}
            width={800}
            height={250}
            alt="Display System"
          />
          <div className="group-hover:bg-zinc-200/90 dark:group-hover:bg-zinc-800/90 bg-zinc-300 dark:bg-zinc-800 border-t border-zinc-400 dark:border-zinc-700 px-3 py-2 transition flex flex-row items-center justify-between">
            <span className="font-semibold text-zinc-800 dark:text-zinc-50 text-sm">{t("Settings.preferences.exhibition.systemMode")}</span>
            {chosenTheme.name === "system" && (
              <TbCircleCheckFilled className="text-zinc-800 dark:text-zinc-50" />
            )}
          </div>
        </figure>
        <figure
          onClick={() => handleSwitchTheme("light")}
          className="w-fit rounded-lg overflow-hidden border border-zinc-400 dark:border-zinc-700 flex flex-col cursor-pointer group"
        >
          <Image
            src={"/Theme/display-light.jpg"}
            className={`w-[17rem] overflow-hidden rounded-t-lg ${
              chosenTheme.name == "light" ? "" : "saturate-0"
            } transition group-hover:saturate-100`}
            width={800}
            height={250}
            alt="light theme"
          />
          <div className="group-hover:bg-zinc-200/90 dark:group-hover:bg-zinc-800/90 bg-zinc-300 dark:bg-zinc-800 border-t border-zinc-400 dark:border-zinc-700 px-3 py-2 transition flex flex-row items-center justify-between">
            <span className="font-semibold text-zinc-800 dark:text-zinc-50 text-sm">{t("Settings.preferences.exhibition.lightMode")}</span>
            {chosenTheme.name === "light" && (
              <TbCircleCheckFilled className="text-zinc-800 dark:text-zinc-50" />
            )}
          </div>
        </figure>
        <figure
          onClick={() => handleSwitchTheme("dark")}
          className="w-fit rounded-lg overflow-hidden border border-zinc-400 dark:border-zinc-700 flex flex-col cursor-pointer group"
        >
          <Image
            src={"/Theme/display-dark.jpg"}
            className={`w-[17rem] overflow-hidden rounded-t-lg ${
              chosenTheme.name == "dark" ? "" : "saturate-0"
            } transition group-hover:saturate-100`}
            width={800}
            height={250}
            alt="dark theme"
          />
          <div className="group-hover:bg-zinc-200/90 dark:group-hover:bg-zinc-800/90 bg-zinc-300 dark:bg-zinc-800 border-t border-zinc-400 dark:border-zinc-700 px-3 py-2 transition flex flex-row items-center justify-between">
            <span className="font-semibold text-zinc-800 dark:text-zinc-50 text-sm">{t("Settings.preferences.exhibition.darkMode")}</span>
            {chosenTheme.name === "dark" && (
              <TbCircleCheckFilled className="text-zinc-800 dark:text-zinc-50" />
            )}
          </div>
        </figure>
      </div>
      <div className="mt-5 w-[15rem] flex flex-col gap-2">
        <label className="text-zinc-700 dark:text-zinc-300 text-sm font-semibold">{t("Settings.preferences.exhibition.language")}</label>
        <Select onValueChange={handleChangeLanguage} defaultValue={i18n.language}>
          <SelectTrigger className="text-zinc-900 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-800">
            <SelectValue placeholder="Português (Brasil)" />
          </SelectTrigger>
          <SelectContent className="dark:text-zinc-50 dark:bg-zinc-800 text-zinc-900 bg-zinc-50">
            <SelectItem value="pt-br">Português (Brasil)</SelectItem>
            <SelectItem value="en">English</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">{t("Settings.preferences.exhibition.languageObservation")}</span>
      </div>
    </div>
  );
}
