import { X } from "lucide-react";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";

export interface ErrorModalProps {
    message: string;
    title: string;
    onClose: () => void;
    onError?: () => void;
    hasBackButton?: boolean;
    onBack?: () => void;
}

export function ErrorModal({ message, title, onError, onClose, hasBackButton, onBack }: ErrorModalProps) {
    return (
        <AlertDialog open={true}>
            <AlertDialogContent className="w-[90%] lg:w-fit rounded-lg bg-zinc-900 text-zinc-100 visible z-[999]">
                <AlertDialogHeader>
                    <div className="flex flex-row items-center justify-between">
                        <AlertDialogTitle>
                            {title}
                        </AlertDialogTitle>
                        <AlertDialogCancel className="w-[2rem] border-none bg-transparent hover:bg-transparent text-zinc-400 hover:text-zinc-200" onClick={onClose}>
                            <X size={20} />
                        </AlertDialogCancel>
                    </div>
                </AlertDialogHeader>
                <AlertDialogDescription className="text-md text-zinc-200">
                    {message}
                </AlertDialogDescription>
                
                {hasBackButton && (
                    <AlertDialogFooter>
                        <button onClick={onBack}>Voltar</button>
                    </AlertDialogFooter>
                )}
            </AlertDialogContent>
        </AlertDialog>
    )
}