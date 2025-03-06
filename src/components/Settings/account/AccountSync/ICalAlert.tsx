import { TbBrandWindowsFilled } from "react-icons/tb";
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
import { CalendarIcon, CalendarPlus, X } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export function ICalAlert() {
    const handleCopyURL = () => {
        console.log("Copied URL to clipboard");
    }

    const handleAddToGoogle = () => {
        console.log("Adding to Google Calendar");
    }

    const handleAddToOutlook = () => {
        console.log("Adding to Outlook Calendar");
    }

    const handleAddToSystem = () => {
        console.log("Adding to System Calendar");
    }

    const { t } = useTranslation();

    return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className="bg-zinc-200 hover:bg-zinc-600 hover:text-zinc-100 text-zinc-600 
          dark:bg-zinc-800 dark:hover:bg-zinc-400 dark:hover:text-zinc-900 dark:text-zinc-400 
          transition flex items-center gap-2 w-fit py-[.2rem] text-sm font-semibold px-2 rounded-lg"
        >
          <span className="text-nowrap">{t("Settings.account.AccountSync.addiCalSubscription.button")}</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[90%] max-w-[20rem] rounded-2xl dark:bg-zinc-900 dark:text-zinc-100 bg-zinc-100 text-zinc-900 border-none  visible z-[999]">
        <div className="flex flex-row justify-between gap-4">
          <div className="dark:bg-zinc-800 bg-zinc-200 rounded-full p-4 w-fit">
            <CalendarPlus className="dark:text-zinc-300 text-zinc-700 scale-x-[-1] h-8 w-8" />
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
          {t("Settings.account.AccountSync.addiCalSubscription.title")}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          <span className="text-md dark:text-zinc-300 text-zinc-700 mb-3 text-sm font-medium">
          {t("Settings.account.AccountSync.addiCalSubscription.subtitle")}
          </span>
        </AlertDialogDescription>
        <div className="flex flex-col w-full gap-2 mt-2 text-center">
            <Button onClick={handleAddToGoogle} className="w-full bg-blue-500 text-zinc-50 hover:bg-blue-300">
                <FaGoogle className="text-zinc-50" />
                <span className="text-zinc-50">{t("Settings.account.AccountSync.addiCalSubscription.GoogleAgenda")}</span>
            </Button>
            <Button onClick={handleAddToOutlook} className="w-full bg-sky-500 text-zinc-50 hover:bg-sky-300">
                <TbBrandWindowsFilled className="text-zinc-50" />
                <span className="text-zinc-50">{t("Settings.account.AccountSync.addiCalSubscription.OutlookCalendar")}</span>
            </Button>
            <Button onClick={handleAddToSystem} className="w-full dark:bg-zinc-50 dark:hover:bg-zinc-200 bg-zinc-950 hover:bg-zinc-800">
                <CalendarIcon className="dark:text-zinc-950 text-zinc-50" />
                <span className="dark:text-zinc-950 text-zinc-50">{t("Settings.account.AccountSync.addiCalSubscription.SystemCalendar")}</span>
            </Button>
            <span onClick={handleCopyURL} className="cursor-pointer text-zinc-500 dark:hover:text-zinc-300 hover:text-zinc-700 text-sm mt-2 font-semibold">
            {t("Settings.account.AccountSync.addiCalSubscription.CopyURL")}</span>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
