"use client";

import {
  AlertDialog,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogTitle,
} from "../../../ui/alert-dialog";
import { Button } from "../../../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, Mail, PencilLine, Plus, X } from "lucide-react";
import { Input } from "../../../ui/input";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const EmailSchema = z.object({
  email: z
    .string({
      message: "Por favor, informe um email",
    })
    .email({
      message: "Por favor, informe um email válido",
    }),
});

type Email = z.infer<typeof EmailSchema>;

export function ChangeEmail({
  emailIndex,
  onChangeEmail,
}: {
  emailIndex: number;
  onChangeEmail: (email: string, index: number) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Email>({
    resolver: zodResolver(EmailSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const submitEmail = (data: Email) => {
    console.log("Changing email num " + emailIndex + " to " + data.email);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onChangeEmail(data.email, emailIndex);
      setIsOpen(false);
    }, 2000);
    // onAddEmail();
  };

  const { t } = useTranslation();

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <button
          className="hover:bg-zinc-300 text-zinc-600
          dark:hover:bg-zinc-700 dark:text-zinc-400 
          transition flex items-center gap-2 py-2 text-sm px-3 rounded-lg"
        >
          <PencilLine className="h-4 w-4" />
          <span className="text-zinc-900 dark:text-zinc-100">{t("Settings.account.emails.changeEmail.button")}</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[90%] max-w-[20rem] rounded-2xl 
      dark:bg-zinc-900 dark:text-zinc-100
      bg-zinc-100 text-zinc-900
      border-none visible z-[999]">
        <div className="flex flex-row justify-between gap-4">
          <div className="dark:bg-zinc-800 bg-zinc-200 rounded-full p-4 w-fit">
            <Mail className="dark:text-zinc-300 text-zinc-700 scale-x-[-1] h-8 w-8" />
          </div>
          <AlertDialogCancel
            onClick={() => {}}
            className="border-none bg-transparent hover:bg-transparent"
          >
            <X className="text-zinc-700 dark:text-zinc-300 h-6 w-6 " />
          </AlertDialogCancel>
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl text-start">
          {t("Settings.account.emails.changeEmail.title")}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
        <span className="text-md text-zinc-700 dark:text-zinc-300 mb-3 text-sm font-medium">
        {t("Settings.account.emails.changeEmail.subtitle")}
          </span>
        </AlertDialogDescription>
        <form
          onSubmit={handleSubmit(submitEmail)}
          className="flex flex-col gap-2"
        >
          <label htmlFor="email" className="text-sm dark:text-zinc-200 text-zinc-800">
          {t("Settings.account.emails.changeEmail.label")}
          </label>
          <Input
            type="email"
            placeholder={t("Settings.account.emails.changeEmail.placeholder")}
            autoFocus
            className="font-medium text-base dark:border-zinc-800 dark:hover:border-zinc-300 dark:focus-visible:border-zinc-50 
            border-zinc-200 hover:border-zinc-700 focus-visible:border-zinc-950
            transition"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          <Button
            variant="secondary"
            className="text-base mt-2
            bg-zinc-900 text-zinc-50 hover:bg-zinc-800 hover:text-zinc-100
            dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:hover:text-zinc-900 
            
            "
            size="default"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2Icon className="animate-spin h-5 w-5" />
            ) : (
             t("Settings.account.emails.changeEmail.update")
            )}
          </Button>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
