import Image from "next/image"
import { RefreshCcw, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { EzTooltip } from "../EzTooltip";
import { api } from "@/lib/utils";

export interface ImageDetails {
    image: string | null;
    credits: string;
    from: string;
    alt: string;
    source: string;
  }

interface ImageDisplayProps {
  imageSet: ImageDetails | null;
}

export default function ImageDisplay({ imageSet } : ImageDisplayProps) {
  const [isImageSet, setIsImageSet] = useState<true | false | "error">(false);
  const [imageDetails, setImageDetails] = useState<ImageDetails | null>(imageSet);

useEffect(() => {
  if (imageSet?.image) {
    localStorage.setItem("event-image", JSON.stringify(imageSet));
    setImageDetails(imageSet);
    setIsImageSet(true);
  }
}, [imageSet]);


  const fetchImage = async () => {
    const eventImage = localStorage.getItem("event-image");
    if (eventImage) {
      setImageDetails(JSON.parse(eventImage));
      setIsImageSet(true);
      return;
    }

    try {
      const { data } = await api.get("/api/images/random-event");
      setImageDetails(data);
      localStorage.setItem("event-image", JSON.stringify(data));
      setIsImageSet(true);
    } catch (error: any) {
      if (error.name !== "AbortError") {
        console.error("Error fetching image:", error);
        setIsImageSet("error");
      }
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const handleRetrySettingImage = async () => {
    setIsImageSet(false);
    setImageDetails(null);
    fetchImage();
  };
  return (
    <div>
      {imageDetails && (
        <>
          <EzTooltip content={`${imageDetails.credits} | ${imageDetails.from}`}>
            <BsInfoCircleFill
              className="text-zinc-800 mb-[-2rem] ml-[.7rem] z-[10] group-hover:text-zinc-200 rounded-md transition 1.5s ease-in-out group-hover:visible invisible"
              size={20}
            />
          </EzTooltip>
        </>
      )}
      {isImageSet === true ? (
        <Image
          src={imageDetails?.image || ""}
          alt={imageDetails?.alt || ""}
          width={250}
          height={250}
          className="rounded-lg border-2 group-hover:opacity-70 transition 1.5s ease-in-out"
        />
      ) : isImageSet === "error" ? (
        <div className="rounded-lg border-2 flex items-center justify-center group-hover:brightness-80 w-[250px] h-[250px] transition 1.5s ease-in-out">
          <RefreshCcw
            onClick={() => handleRetrySettingImage()}
            className="text-zinc-500 group-hover:text-zinc-200 rounded-md"
            size={30}
          />
        </div>
      ) : (
        <div className="rounded-lg border-2 flex items-center justify-center group-hover:brightness-80 w-[250px] h-[250px] transition 1.5s ease-in-out">
          <Loader2
            className="animate-spin text-zinc-500 group-hover:text-zinc-200 rounded-md transition 1.5s ease-in-out"
            size={30}
          />
        </div>
      )}
    </div>
  );
}
