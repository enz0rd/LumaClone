import { CheckCircle2, XCircle } from "lucide-react";
import { BsExclamationCircle } from "react-icons/bs";

export const ToastTypes = { 
    success: {
        icon: <CheckCircle2 size={20} className="text-zinc-200" />,
        style: {
          background: "#65a30d",
          color: "#e4e4e7",
        },
        duration: 5000
    },
    error: {
      icon: <XCircle size={20} className="text-zinc-200" />,
      style: {
        background: "#dc2626",
        color: "#e4e4e7",
      },
      duration: 5000
    },
    default: {
      icon: <BsExclamationCircle size={20} className="text-zinc-200" />,
      style: {
        background: "#212121",
        color: "#e4e4e7",
      },
      duration: 5000
    }
}