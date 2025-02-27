"use client";

import {
  AlertDialog,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, Mail, PencilLine, Plus, X } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";

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


  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <button
          className="hover:bg-zinc-700 transition 
                text-zinc-400 flex items-center gap-2 py-2 text-sm px-3 rounded-lg"
        >
          <PencilLine className="h-4 w-4" />
          <span className="text-zinc-100">Alterar Email</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[90%] max-w-[20rem] rounded-2xl bg-zinc-900 border-none text-zinc-100 visible z-[999]">
        <div className="flex flex-row justify-between gap-4">
          <div className="bg-zinc-800 rounded-full p-4 w-fit">
            <Mail className="text-zinc-300 scale-x-[-1] h-8 w-8" />
          </div>
          <AlertDialogCancel
            onClick={() => {}}
            className="border-none bg-transparent hover:bg-transparent"
          >
            <X className="text-zinc-300 h-6 w-6 " />
          </AlertDialogCancel>
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl text-start">
            Alterar Email
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
        <span className="text-md text-zinc-300 mb-3 text-sm font-medium">
            Altere seu endereço de email principal do Luma. Este email é
            compartilhado com os anfitriões quando você se inscreve em seus
            eventos.
          </span>
        </AlertDialogDescription>
        <form
          onSubmit={handleSubmit(submitEmail)}
          className="flex flex-col gap-2"
        >
          <label htmlFor="email" className="text-sm text-zinc-200">
            Novo Endereço de Email
          </label>
          <Input
            type="email"
            placeholder="voce@email.com"
            autoFocus
            className="font-medium text-base border-zinc-800 hover:border-zinc-300 focus-visible:border-zinc-50 transition"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          <Button
            variant="secondary"
            className="text-base mt-2"
            size="default"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2Icon className="animate-spin h-5 w-5" />
            ) : (
              "Atualizar"
            )}
          </Button>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
