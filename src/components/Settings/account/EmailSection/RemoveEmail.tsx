"use client";
import { FaTrash } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../ui/alert-dialog";
import { Button } from "../../../ui/button";
import { Loader2Icon, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function RemoveEmailButton({ email, onRemoveEmail }: { email: string, onRemoveEmail: () => void }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const removeEmail = () => {
    setIsLoading(true);
    setInterval(() => {
      setIsLoading(false);
      onRemoveEmail();
      setIsOpen(false);
    }, 1000);
    
    console.log("Removing email", email);
  };

  const { t } = useTranslation();

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          className="dark:hover:bg-zinc-700 dark:text-zinc-400 dark:bg-zinc-900 bg-zinc-50 transition justify-start
          hover:bg-zinc-300 text-zinc-600       
          flex gap-2 py-2 text-sm px-3 rounded-lg items-center"
        >
          <FaTrash size={15} />
          <span className="dark:text-zinc-400 text-zinc-600">{t("Settings.account.emails.removeEmail.button")}</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[90%] max-w-[22rem] rounded-2xl 
      dark:bg-zinc-900 dark:text-zinc-100 bg-zinc-100 text-zinc-900
      border-none  visible z-[999]">
        <div className="flex flex-row justify-between gap-4">
          <div className="dark:bg-red-800 bg-red-200 bg-opacity-30 rounded-full p-4 w-fit">
            <FaTrash className="text-red-500 scale-x-[-1] h-8 w-8" />
          </div>
          <AlertDialogCancel
            onClick={() => {}}
            className="border-none bg-transparent hover:bg-transparent"
          >
            <X className="dark:text-zinc-300 text-zinc-700 h-6 w-6 " />
          </AlertDialogCancel>
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl text-start">
          {t("Settings.account.emails.removeEmail.title")}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="text-md dark:text-zinc-300 text-zinc-700 text-sm font-medium">
        {t("Settings.account.emails.removeEmail.subtitleP1")} <strong>{email}</strong> {t("Settings.account.emails.removeEmail.subtitleP2")}
        </AlertDialogDescription>
          <div className="flex flex-row w-full gap-4 mt-5 justify-between items-center">
            <Button
              onClick={removeEmail}
              className="bg-red-600 text-zinc-50 w-full hover:bg-red-400 text-base"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2Icon className="animate-spin h-5 w-5" />
              ) : t("Settings.account.emails.removeEmail.remove")}
            </Button>
            <AlertDialogCancel asChild className="border-none m-0">
              <Button className="dark:bg-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-800 dark:hover:bg-zinc-300 
              bg-zinc-200 text-zinc-700 hover:text-zinc-200 hover:bg-zinc-700
              w-full border-none text-base">
                {t("Settings.account.emails.removeEmail.cancel")}
              </Button>
            </AlertDialogCancel>
          </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
