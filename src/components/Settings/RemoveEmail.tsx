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
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Loader2Icon, X } from "lucide-react";
import { useState } from "react";

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

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          className="hover:bg-zinc-700 transition justify-start
                text-zinc-400 flex gap-2 py-2 text-sm px-3 rounded-lg items-center"
        >
          <FaTrash size={15} />
          <span className="text-zinc-400">Remover Email</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[90%] max-w-[22rem] rounded-2xl bg-zinc-900 border-none text-zinc-100 visible z-[999]">
        <div className="flex flex-row justify-between gap-4">
          <div className="bg-red-800 bg-opacity-30 rounded-full p-4 w-fit">
            <FaTrash className="text-red-500 scale-x-[-1] h-8 w-8" />
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
            Remover Email
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="text-md text-zinc-300 text-sm font-medium">
            Tem certeza de que deseja remover <strong>{email}</strong> da sua
            conta?
        </AlertDialogDescription>
          <div className="flex flex-row w-full gap-4 mt-5 justify-between items-center">
            <Button
              onClick={removeEmail}
              className="bg-red-600 text-zinc-50 w-full hover:bg-red-400 text-base"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2Icon className="animate-spin h-5 w-5" />
              ) : ("Remover")}
            </Button>
            <AlertDialogCancel asChild className="border-none m-0">
              <Button className="bg-zinc-800 w-full border-none text-zinc-300 hover:text-zinc-800 hover:bg-zinc-300 text-base">
                Cancelar
              </Button>
            </AlertDialogCancel>
          </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
