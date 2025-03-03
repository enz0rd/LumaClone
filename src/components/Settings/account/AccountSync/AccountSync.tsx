"use client";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "../../../ui/button";
import { Loader2Icon, Rss } from "lucide-react";
import { ICalAlert } from "./ICalAlert";

export function AccountSync() {
  const [isLoading, setLoading] = useState(false);

  const handleSyncWithGoogle = async () => {
    console.log("Syncing with Google...");
  };

  const addICalSubscription = async () => {
    console.log("Adding iCal subscription");
  };

  return (
    <div className="my-8 pt-8 border-t w-full border-zinc-800">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold dark:text-zinc-50 text-zinc-950">
          Sincronização de Conta
        </h1>
      </div>
      <div className="mt-4 border dark:border-zinc-800 dark:bg-zinc-900 border-zinc-200 bg-zinc-100 bg-opacity-60 rounded-xl">
        <div className={`flex flex-row justify-between p-4 dark:border-zinc-800 border-zinc-200`}>
          <div className="flex flex-row gap-2 justify-between items-center w-full">
            <div className="flex flex-row gap-2">
              <Rss className="text-zinc-500 text-lg self-start mt-1" />
              <div className="flex flex-col justify-between">
                <div className="flex flex-row gap-2">
                  <p className="dark:text-zinc-50 text-zinc-950">Sincronização de Calendário</p>
                </div>
                <span className="text-zinc-500 font-semibold text-sm">
                  Sincronize o seu calendário da Luma com o Google, Outlook ou
                  Apple.
                </span>
              </div>
            </div>
            <ICalAlert />
          </div>
        </div>
        <div
          className={`flex flex-row justify-between p-4 dark:border-zinc-800 border-zinc-200 border-t`}
        >
          <div className="flex flex-row gap-2 justify-between items-center w-full">
            <div className="flex flex-row gap-2">
              <FaGoogle className="text-zinc-500 text-lg self-start mt-1" />
              <div className="flex flex-col justify-between">
                <div className="flex flex-row gap-2">
                  <p className="dark:text-zinc-50 text-zinc-950">
                    Sincronizar Contatos com o Google
                  </p>
                </div>
                <span className="text-zinc-500 font-semibold text-sm">
                  Sincronize seus contatos do Gmail para convidá-los facilmente
                  para seus eventos.
                </span>
              </div>
            </div>
            <Button
              onClick={handleSyncWithGoogle}
              className="dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 
              bg-zinc-950 text-zinc-100 hover:bg-zinc-800
              px-2 h-[1.7rem] rounded-lg"
              disabled={isLoading}
            >
              <span className="dark:text-zinc-900 text-zinc-100 font-semibold text-sm">
                Ativar Sincronização
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
