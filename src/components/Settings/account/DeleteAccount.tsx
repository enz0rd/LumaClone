"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertTriangleIcon, Loader2Icon, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaTrash } from "react-icons/fa";

export function DeleteAccount() {
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleDeleteAccount = async () => {
    setIsLoading(true);
    setInterval(() => {
      setIsLoading(false);
      console.log("Account Deleted");
    }, 3000);
  };

  const { t } = useTranslation();

  return (
    <div className="my-8 pt-8 border-t w-full dark:border-zinc-800 border-zinc-300">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold dark:text-zinc-50 text-zinc-950">{t("Settings.account.DeleteAccount.title")}</h1>
      </div>
      <span className="text-md dark:text-zinc-300 text-zinc-700">
      {t("Settings.account.DeleteAccount.subtitle")}
      </span>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="mt-4 bg-red-500 hover:bg-red-600 flex flex-row gap-3">
            <AlertTriangleIcon className="w-6 h-6 text-zinc-50" />
            <span className="text-zinc-50">{t("Settings.account.DeleteAccount.delete.button")}</span>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[90%] max-w-[22rem] rounded-2xl dark:bg-zinc-900 bg-zinc-100 border-none dark:text-zinc-100 text-zinc-900 visible z-[999] gap-2">
          <div className="flex flex-row justify-between">
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
            {t("Settings.account.DeleteAccount.delete.title")}
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription className="text-md dark:text-zinc-300 text-zinc-700 text-sm font-medium">
          {t("Settings.account.DeleteAccount.delete.subtitle")}
            <strong>{localStorage.getItem("email")}</strong>?
          </AlertDialogDescription>
          <div className="flex flex-row items-center gap-2">
            <Checkbox
              id="deleteCheckbox"
              onCheckedChange={() => setChecked(!checked)}
              className="w-5 h-5 rounded-md transition
              dark:bg-zinc-900 dark:border-zinc-600 dark:hover:border-zinc-300 dark:data-[state=checked]:text-zinc-900 dark:data-[state=checked]:bg-zinc-50
              bg-zinc-100 border-zinc-400 hover:border-zinc-700 data-[state=checked]:text-zinc-100 data-[state=checked]:bg-zinc-950
              "
            />
            <label
              htmlFor="deleteCheckbox"
              className="text-sm dark:text-zinc-300 text-zinc-700 mt-4"
            >
              {t("Settings.account.DeleteAccount.delete.checkbox")}
            </label>
          </div>
          <div className="flex flex-row w-full gap-4 mt-5 justify-between items-center">
            <Button
              onClick={handleDeleteAccount}
              className="bg-red-600 text-zinc-50 w-full hover:bg-red-400 text-base"
              disabled={!checked || isLoading}
            >
              {isLoading ? (
                <Loader2Icon className="animate-spin h-5 w-5" />
              ) : (
                t("Settings.account.DeleteAccount.delete.delete")
              )}
            </Button>
            <AlertDialogCancel asChild className="border-none m-0">
              <Button className="dark:bg-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-800 dark:hover:bg-zinc-300 
              bg-zinc-200 text-zinc-700 hover:text-zinc-200 hover:bg-zinc-700 
              w-full border-none text-base">
                {t("Settings.account.DeleteAccount.delete.cancel")}
              </Button>
            </AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
