"use client";
import { useCallback, useState } from "react";
import { AddEmail } from "./AddEmail";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { ChangeEmail } from "./ChangeEmail";
import { ArrowUp } from "lucide-react";
import { Button } from "../../../ui/button";
import { RemoveEmailButton } from "./RemoveEmail";
import { EzTooltip } from "../../../EzTooltip";
import { useTranslation } from "react-i18next";

type Emails = {
  email: string;
  isMain?: boolean;
};

const emailsPlaceholder = [
  {
    email: "enzorossidaltoe@hotmail.com.br",
    isMain: true,
  },
  {
    email: "enzo@icloud.com",
  },
];

export function EmailsList() {
  const [emails, setEmails] = useState<Emails[]>(emailsPlaceholder);

  const promoteToMainEmail = (email: string) => {
    console.log("Promoting email to main", email);
  };

  const handleAddEmail = (e: Emails) => {
    setEmails((prevEmails) => {
      if (prevEmails.some(email => email.email === e.email)) {
        return prevEmails;
      }
      return [...prevEmails, e];
    });
    return;
  };

  const handleChangeEmail = useCallback((index: number, newEmail: string) => {
    setEmails((prevEmails) =>
      prevEmails.map((email, i) => (i === index ? { ...email, email: newEmail } : email))
    );
  }, []);

  const { t } = useTranslation();

  return (
    <div className="my-8 pt-8 border-t w-full dark:border-zinc-800 border-zinc-200">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold dark:text-zinc-50 text-zinc-950">{t("Settings.account.emails.title")}</h1>
        <AddEmail onAddEmail={(e) => handleAddEmail(e)} />
      </div>
      <span className="text-md dark:text-zinc-300 text-zinc-700">
      {t("Settings.account.emails.subtitle")}
      </span>
      <div className="mt-4 border 
      dark:border-zinc-800 dark:bg-zinc-900 
      border-zinc-200 bg-zinc-100 
      bg-opacity-60 rounded-xl">
        {emails.map((record, index) => (
          <div
            key={index}
            className={`flex flex-row justify-between p-4 dark:border-zinc-800 border-zinc-200 ${index == 0 ? "" : "border-t"}`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-col justify-between">
                <div className="flex flex-row gap-2">
                  <p className="dark:text-zinc-50 text-zinc-950">{record.email}</p>
                  {record.isMain && (
                    <span className="dark:text-zinc-400 dark:bg-zinc-800 text-zinc-600 bg-zinc-200 rounded-xl text-xs font-bold px-2 py-1">
                      {t("Settings.account.emails.main")}
                    </span>
                  )}
                </div>
                {record.isMain ? (
                  <span className="text-zinc-500 font-semibold text-sm">
                    {t("Settings.account.emails.mainEmailObservation")}
                  </span>
                ) : (
                  <span className="text-zinc-500 font-semibold text-sm">
                    {t("Settings.account.emails.emailObservation")}
                  </span>
                )}
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="my-auto m-2 px-1 py-1 transition rounded-lg cursor-pointer hover:bg-zinc-400 dark:hover:bg-zinc-600">
                  <EzTooltip content={t("Settings.account.emails.tooltip")}>
                    <BsThreeDots className="w-5 dark:text-zinc-300 text-zinc-700" />
                  </EzTooltip>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="dark:bg-zinc-900 bg-zinc-100 rounded-lg border-none text-left drop-shadow-md flex flex-col">
                {record.isMain ? (
                <ChangeEmail
                  emailIndex={index}
                  onChangeEmail={(newEmail) => handleChangeEmail(index, newEmail)}
                />
                ) : (
                  <>
                    <Button
                      className=" dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:bg-zinc-900 bg-zinc-50 transition dark:text-zinc-400 text-zinc-600 flex 
                      gap-2 py-2 text-sm px-3 rounded-lg items-center"
                      onClick={() => promoteToMainEmail(record.email)}
                    >
                      <ArrowUp className="w-4" />
                      <span>{t("Settings.account.emails.promoteToMain")}</span>
                    </Button>
                    <RemoveEmailButton onRemoveEmail={() => setEmails(emails.filter(e => e.email !== record.email))} email={record.email} />
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </div>
  );
}
