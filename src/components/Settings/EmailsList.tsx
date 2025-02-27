"use client";
import { useCallback, useState } from "react";
import { AddEmail } from "./AddEmail";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { ChangeEmail } from "./ChangeEmail";
import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";
import { RemoveEmailButton } from "./RemoveEmail";
import { EzTooltip } from "../EzTooltip";

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

  return (
    <div className="my-8 pt-8 border-t w-full border-zinc-800">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-50">Emails</h1>
        <AddEmail onAddEmail={(e) => handleAddEmail(e)} />
      </div>
      <span className="text-md text-zinc-300">
        Adicione emails adicionais para receber convites de eventos enviados
        para esses endereços.
      </span>
      <div className="mt-4 border border-zinc-800 bg-zinc-900 bg-opacity-60 rounded-xl">
        {emails.map((record, index) => (
          <div
            key={index}
            className={`flex flex-row justify-between p-4 border-zinc-800 ${index == 0 ? "" : "border-t"}`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-col justify-between">
                <div className="flex flex-row gap-2">
                  <p className="text-zinc-50">{record.email}</p>
                  {record.isMain && (
                    <span className="text-zinc-400 bg-zinc-800 rounded-xl text-xs font-bold px-2 py-1">
                      Principal
                    </span>
                  )}
                </div>
                {record.isMain ? (
                  <span className="text-zinc-500 font-semibold text-sm">
                    Este e-mail será compartilhado com os anfitriões quando você
                    se registrar para os eventos deles.
                  </span>
                ) : (
                  <span className="text-zinc-500 font-semibold text-sm">
                    Convites enviados para este email serão vinculados à sua
                    conta Luma.
                  </span>
                )}
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="my-auto m-2 px-1 py-1 transition rounded-lg cursor-pointer hover:bg-zinc-600">
                  <EzTooltip content="Ações">
                    <BsThreeDots className="w-5 text-zinc-300 " />
                  </EzTooltip>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-zinc-900 rounded-lg border-none text-left drop-shadow-md flex flex-col">
                {record.isMain ? (
                <ChangeEmail
                  emailIndex={index}
                  onChangeEmail={(newEmail) => handleChangeEmail(index, newEmail)}
                />
                ) : (
                  <>
                    <Button
                      className=" hover:bg-zinc-700 transition text-zinc-400 flex 
                      gap-2 py-2 text-sm px-3 rounded-lg items-center"
                      onClick={() => promoteToMainEmail(record.email)}
                    >
                      <ArrowUp className="w-4" />
                      <span>Promover para principal</span>
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
