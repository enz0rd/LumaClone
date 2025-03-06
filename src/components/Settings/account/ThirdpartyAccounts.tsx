"use client";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BiLogoZoom } from "react-icons/bi";
import { SiEthereum, SiSolana } from "react-icons/si";
import { useTranslation } from "react-i18next";

export function ThirdpartyAccounts() {
  const [isConnected, setConnected] = useState({
    google: false,
    zoom: false,
    solana: false,
    ethereum: false,
  });

  type Provider = "google" | "zoom" | "solana" | "ethereum";

  const handleConnection = (provider: Provider) => {
    if (isConnected[provider]) {
      console.log(`${provider} disconnected`);
      setConnected({ ...isConnected, [provider]: false });
      return;
    }
    console.log(`${provider} connected`);
    setConnected({ ...isConnected, [provider]: true });
  };

  const { t } = useTranslation();

  return (
    <div className="my-8 pt-8 border-t w-full dark:border-zinc-800 border-zinc-200">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold dark:text-zinc-50 text-zinc-950">
        {t("Settings.account.ThirdpartyAccounts.title")}
        </h1>
      </div>
      <span className="text-md dark:text-zinc-300 text-zinc-700">
      {t("Settings.account.ThirdpartyAccounts.subtitle")}
      </span>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div className="flex flex-row gap-3 items-center justify-between w-full border px-4 py-2 
        dark:border-zinc-800 dark:bg-zinc-900 border-zinc-200 bg-zinc-100 
        bg-opacity-60 rounded-xl">
          <div className="flex flex-row gap-3 items-center">
            <FcGoogle className="text-zinc-500 text-lg" />
            <div className="flex flex-col gap-1">
              <p className="text-zinc-950 dark:text-zinc-50">Google</p>
              <span className="text-zinc-500 font-semibold text-sm">
                {isConnected.google ? t("Settings.account.ThirdpartyAccounts.connectedAccount") : t("Settings.account.ThirdpartyAccounts.notConnectedAccount")}
              </span>
            </div>
          </div>
          <Button
            onClick={() => handleConnection("google")}
            className="bg-zinc-950 text-zinc-100 hover:bg-zinc-800 
            dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200
            p-0 h-7 aspect-square rounded-lg"
          >
            {isConnected.google ? (
              <X className="h-4 w-4 dark:text-zinc-900 text-zinc-100" />
            ) : (
              <Plus className="h-4 w-4 dark:text-zinc-900 text-zinc-100" />
            )}
          </Button>
        </div>
        <div className="flex flex-row gap-3 items-center justify-between w-full border px-4 py-2 
        dark:border-zinc-800 dark:bg-zinc-900 border-zinc-200 bg-zinc-100 
        bg-opacity-60 rounded-xl">
          <div className="flex flex-row gap-3 items-center">
            <BiLogoZoom className="text-blue-500 text-lg" />
            <div className="flex flex-col gap-1">
              <p className="dark:text-zinc-50 text-zinc-950">Zoom</p>
              <span className="text-zinc-500 font-semibold text-sm">
                {isConnected.zoom ? t("Settings.account.ThirdpartyAccounts.connectedAccount") : t("Settings.account.ThirdpartyAccounts.notConnectedAccount")}
              </span>
            </div>
          </div>
          <Button
            onClick={() => handleConnection("zoom")}
            className="dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 
            bg-zinc-950 text-zinc-100 hover:bg-zinc-800
            p-0 h-7 aspect-square rounded-lg"
          >
            {isConnected.zoom ? (
              <X className="h-4 w-4 dark:text-zinc-900 text-zinc-100" />
            ) : (
              <Plus className="h-4 w-4 dark:text-zinc-900 text-zinc-100" />
            )}
          </Button>
        </div>
        <div className="flex flex-row gap-3 items-center justify-between w-full border px-4 py-2 
        dark:border-zinc-800 dark:bg-zinc-900 border-zinc-200 bg-zinc-100
        bg-opacity-60 rounded-xl">
          <div className="flex flex-row gap-3 items-center">
            <SiSolana className="text-zinc-500 text-lg" />
            <div className="flex flex-col gap-1">
              <p className="dark:text-zinc-50 text-zinc-950">Solana</p>
              <span className="text-zinc-500 font-semibold text-sm">
                {isConnected.solana ? t("Settings.account.ThirdpartyAccounts.connectedAccount") : t("Settings.account.ThirdpartyAccounts.notConnectedAccount")}
              </span>
            </div>
          </div>
          <Button
            onClick={() => handleConnection("solana")}
            className="dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 
            bg-zinc-950 text-zinc-100 hover:bg-zinc-800
            p-0 h-7 aspect-square rounded-lg"
          >
            {isConnected.solana ? (
              <X className="h-4 w-4 dark:text-zinc-900 text-zinc-100" />
            ) : (
              <Plus className="h-4 w-4 dark:text-zinc-900 text-zinc-100" />
            )}
          </Button>
        </div>
        <div className="flex flex-row gap-3 items-center justify-between w-full border px-4 py-2 
        dark:border-zinc-800 dark:bg-zinc-900 border-zinc-200 bg-zinc-100
        bg-opacity-60 rounded-xl">
          <div className="flex flex-row gap-3 items-center">
            <SiEthereum className="text-zinc-500 text-lg" />
            <div className="flex flex-col gap-1">
              <p className="dark:text-zinc-50 text-zinc-950">Ethereum</p>
              <span className="text-zinc-500 font-semibold text-sm">
                {isConnected.ethereum ? t("Settings.account.ThirdpartyAccounts.connectedAccount") : t("Settings.account.ThirdpartyAccounts.notConnectedAccount")}
              </span>
            </div>
          </div>
          <Button
            onClick={() => handleConnection("ethereum")}
            className="dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 
            bg-zinc-950 text-zinc-100 hover:bg-zinc-800
            p-0 h-7 aspect-square rounded-lg"
          >
            {isConnected.ethereum ? (
              <X className="h-4 w-4 dark:text-zinc-900 text-zinc-100" />
            ) : (
              <Plus className="h-4 w-4 dark:text-zinc-900 text-zinc-100" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
