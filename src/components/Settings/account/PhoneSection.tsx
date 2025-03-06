'use client'
import { useTranslation } from "react-i18next";
import { EzTooltip } from "../../EzTooltip";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

export function PhoneSection() {
  const { t } = useTranslation();
  return (
    <div className="my-8 pt-8 border-t w-full dark:border-zinc-800 border-zinc-200">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold dark:text-zinc-50 text-zinc-950">
        {t("Settings.account.Phone.title")}
        </h1>
      </div>
      <span className="text-md dark:text-zinc-300 text-zinc-700">
      {t("Settings.account.Phone.subtitle")}
      </span>
      <div className="flex flex-col gap-2 mt-5">
        <label htmlFor="phone" className="dark:text-zinc-400 text-zinc-600 font-semibold text-sm">
        {t("Settings.account.Phone.label")}
        </label>
        <EzTooltip
          className="text-wrap w-[25rem] text-center"
          content={t("Settings.account.Phone.tooltip")}
        >
          <div className="flex flex-row gap-2 items-center w-fit">
            <Input
              className="rounded-lg dark:text-zinc-50 text-zinc-900
              dark:border-zinc-800 dark:hover:border-zinc-500 dark:focus-visible:border-zinc-50 
              border-zinc-200 hover:border-zinc-500 focus-visible:border-zinc-950 "
              id="phone"
              type="tel"
              placeholder={t("Settings.account.Phone.phonePlaceholder")}
              disabled
            />
            <Button
              className="dark:bg-zinc-300 dark:text-zinc-900 bg-zinc-700 text-zinc-100 rounded-lg font-medium text-base"
              disabled
            >
              {t("Settings.account.Phone.update")}
            </Button>
          </div>
        </EzTooltip>
        <span className="dark:text-zinc-400 text-zinc-600 text-sm">
        {t("Settings.account.Phone.securityObservation")}
        </span>
      </div>
    </div>
  );
}
