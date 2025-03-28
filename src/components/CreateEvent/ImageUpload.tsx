import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { ToastTypes } from "../ToastTypes";

export interface SetImageReturn {
    type?: string;
    file: File;
    credits?: string;
    from?: string;
    url?: string;
}

interface ImageUploadProps {
    onSetImage: (object: SetImageReturn) => void;
}

export default function ImageUpload({ onSetImage } : ImageUploadProps) {

    const handleSetImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("teste")
        if(!e.target.files) {
            toast("Nenhum arquivo selecionado", ToastTypes.default);
            return;
        } 
        
        const file = e.target.files[0];
        console.log(file)
        if (file && ["image/png", "image/jpeg"].includes(file.type)) {
            if (file.size > 5 * 1024 * 1024) {
                toast("Arquivo muito grande. Tamanho máximo: 5MB", ToastTypes.error);
                return;
            }
            const previewUrl = URL.createObjectURL(file);
            onSetImage({ 
                type: "image", 
                file: e.target.files![0], 
                credits: "Image by user",
                from: file.name
            });
            return;
        }
        toast("O arquivo selecionado é inválido. Formatos suportados: PNG e JPG.", ToastTypes.error);
        return;
    }
  return (
    <>
        <label htmlFor="event-image">
            <div className="flex flex-col items-center justify-center p-6 bg-zinc-800/80 rounded-lg">
            <h1 className="text-md text-wrap font-medium text-zinc-50">
                Drag & drop or click here to upload
            </h1>
            <p className="text-xs text-wrap font-medium text-zinc-400">
                Or choose an image below. The ideal aspect ratio is 1:1.
            </p>
            <input 
                onChange={handleSetImage} 
                type="file" 
                id="event-image" 
                className="hidden"
                accept="image/jpeg, image/png"
            />
            </div>
        </label>
    </>
  );
}
