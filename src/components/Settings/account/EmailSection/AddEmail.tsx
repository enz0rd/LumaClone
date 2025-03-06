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
import { Loader2Icon, Mail, Plus, X } from "lucide-react";
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

export function AddEmail({
  onAddEmail,
}: {
  onAddEmail: (email: { email: string; isMain: boolean }) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Email>({
    resolver: zodResolver(EmailSchema),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitEmail = (data: Email) => {
    console.log(data);
    setIsLoading(true);
    setInterval(() => {
      setIsLoading(false);
      onAddEmail({ email: data.email, isMain: false });
      setIsOpen(false);
    }, 2000);
  };

  const { t } = useTranslation();

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <button
          className="dark:bg-zinc-800 dark:hover:bg-zinc-400 dark:hover:text-zinc-900 dark:text-zinc-400 
          bg-zinc-200 hover:bg-zinc-600 hover:text-zinc-100 text-zinc-600
          transition flex items-center gap-2 py-[.2rem] text-sm font-semibold px-2 rounded-lg"
        >
          <Plus className="h-4 w-4" />
          <span>{t("Settings.account.emails.addEmail.button")}</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[90%] max-w-[20rem] rounded-2xl border-none visible z-[999]
      dark:bg-zinc-900 dark:text-zinc-100 bg-zinc-100 text-zinc-900">
        <div className="flex flex-row justify-between gap-4">
          <div className="dark:bg-zinc-800 bg-zinc-200 rounded-full p-4 w-fit">
            <Mail className="dark:text-zinc-300 text-zinc-700 scale-x-[-1] h-8 w-8" />
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
          {t("Settings.account.emails.addEmail.title")}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          <span className="text-md dark:text-zinc-300 text-zinc-700 mb-3 text-sm font-medium">
          {t("Settings.account.emails.addEmail.subtitle")}
          </span>
        </AlertDialogDescription>
        <form
          onSubmit={handleSubmit(submitEmail)}
          className="flex flex-col gap-2"
        >
          <label htmlFor="email" className="text-sm dark:text-zinc-200 text-zinc-800">
          {t("Settings.account.emails.addEmail.label")}
          </label>
          <Input
            type="email"
            placeholder={t("Settings.account.emails.addEmail.placeholder")}
            className="font-medium text-base transition
            dark:border-zinc-800 dark:hover:border-zinc-300 dark:focus-visible:border-zinc-50
            border-zinc-200 hover:border-zinc-700 focus-visible:border-zinc-950"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          <Button
            type="submit"
            variant="secondary"
            className="text-base mt-2"
            size="default"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2Icon className="animate-spin h-5 w-5" />
            ) : (
              t("Settings.account.emails.addEmail.add")
            )}
          </Button>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
