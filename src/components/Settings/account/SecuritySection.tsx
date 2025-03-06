'use client'
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { Button } from "../../ui/button";
import { Loader2Icon } from "lucide-react";
import { BsShieldCheck } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export function SecuritySection() {
  const [isEmailSent, setEmailSent] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isPasswordDefined, setPasswordDefined] = useState(false);

  const sendPasswordToEmail = async () => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
      setEmailSent(true);
    }, 2000);
  }

  const { t } = useTranslation();

  return (
    <div className="my-8 pt-8 border-t w-full dark:border-zinc-800 border-zinc-00">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold dark:text-zinc-50 text-zinc-950">
        {t("Settings.account.PasswordAndSecurity.title")}
        </h1>
      </div>
      <span className="text-md dark:text-zinc-300 text-zinc-700">
      {t("Settings.account.PasswordAndSecurity.subtitle")}
      </span>
      <div className="mt-4 border dark:border-zinc-800 dark:bg-zinc-900 border-zinc-200 bg-zinc-100 bg-opacity-60 rounded-xl">
        <div
          className={`flex flex-row justify-between p-4 dark:border-zinc-800 border-zinc-200`}
        >
          <div className="flex flex-row gap-2 justify-between items-center w-full">
            <div className="flex flex-row gap-2">
              <FaLock className="text-zinc-500 text-lg self-start mt-1" />
              <div className="flex flex-col justify-between">
                <div className="flex flex-row gap-2">
                  <p className="dark:text-zinc-50 text-zinc-950">{t("Settings.account.PasswordAndSecurity.accountPassword")}</p>
                </div>
                {isEmailSent ? (
                  <span className="dark:text-yellow-300 text-yellow-700 font-semibold text-sm">
                    {t("Settings.account.PasswordAndSecurity.passwordObservationWithEmailSent")}
                  </span>
                ) : (
                  <span className="text-zinc-500 font-semibold text-sm">
                    {t("Settings.account.PasswordAndSecurity.passwordObservation")}
                  </span>
                )}
              </div>
            </div>
            <Button onClick={() => sendPasswordToEmail()} className="
            dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200
            bg-zinc-950 text-zinc-100 hover:bg-zinc-800 
            px-2 w-[7rem] h-[1.7rem] rounded-lg" disabled={isLoading || isEmailSent}>
              {isLoading ? (
                <Loader2Icon className="animate-spin h-4 w-4 dark:text-zinc-900 text-zinc-100" />
              ) : (
                <span className="dark:text-zinc-900 text-zinc-100 font-semibold text-sm">
                  {t("Settings.account.PasswordAndSecurity.definePassword")}
                </span>
              )}
            </Button>
          </div>
        </div>
        <div className={`flex flex-row justify-between p-4 dark:border-zinc-800 border-zinc-200 border-t`}>
          <div className="flex flex-row gap-2 justify-between items-center w-full">
            <div className="flex flex-row gap-2">
              <BsShieldCheck className="text-zinc-500 text-lg self-start mt-1" />
              <div className="flex flex-col justify-between">
                <div className="flex flex-row gap-2">
                  <p className="text-zinc-950 dark:text-zinc-50">{t("Settings.account.PasswordAndSecurity.twoFactorAuth")}</p>
                </div>
                  <span className="text-zinc-500 font-semibold text-sm">
                  {t("Settings.account.PasswordAndSecurity.twoFactorAuthObservation")}
                  </span>
              </div>
            </div>
            <Button className="bg-zinc-950 text-zinc-100 hover:bg-zinc-800 
            dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200
            px-2 w-[7rem] h-[1.7rem] rounded-lg" disabled={!isPasswordDefined}>
                <span className="text-zinc-100 dark:text-zinc-900 font-semibold text-sm">
                {t("Settings.account.PasswordAndSecurity.activate2FA")}
                </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
