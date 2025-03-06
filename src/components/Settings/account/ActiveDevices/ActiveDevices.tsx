'use client'
import { useState } from "react";
import { BsPhone } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import { RemoveDevice } from "./RemoveDevice";
import { useTranslation } from "react-i18next";

type Devices = {
    browser: string;
    os: string;
    location: string;
    isCurrent: boolean;
    isMobile: boolean;
}

const devicesPlaceholder = [
    {
        browser: "Chrome",
        os: "Windows",
        location: "São Paulo, BR",
        isCurrent: true,
        isMobile: false
    },
    {
        browser: "Safari",
        os: "iOS",
        location: "Concórdia, BR",
        isCurrent: false,
        isMobile: true
    }
]

export function ActiveDevices() {
    const [devices, setDevices] = useState<Devices[]>(devicesPlaceholder);

    const { t } = useTranslation();

    return (
        <div className="my-8 pt-8 border-t w-full dark:border-zinc-800 border-zinc-200">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold dark:text-zinc-50 text-zinc-950">{t("Settings.account.ActiveDevices.title")}</h1>
          </div>
          <span className="text-md dark:text-zinc-300 text-zinc-700">
          {t("Settings.account.ActiveDevices.subtitle")}
          </span>
          <div className="mt-4 border dark:border-zinc-800 dark:bg-zinc-900 border-zinc-200 bg-zinc-100 bg-opacity-60 rounded-xl">
            {devices.map((record, index) => (
              <div
                key={index}
                className={`flex flex-row justify-between p-4 items-center dark:border-zinc-800 border-zinc-200 ${index == 0 ? "" : "border-t"}`}
              >
                <div className="flex flex-row items-center gap-3">
                    {record.isMobile ? (
                        <BsPhone className="text-zinc-500 h-4 w-4" />
                    ) : (
                        <FaDesktop className="text-zinc-500 h-4 w-4" />
                    )}
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-row gap-2">
                      <p className="dark:text-zinc-50 text-zinc-950">{record.browser} no {record.os}</p>
                      {record.isCurrent && (
                        <span className="dark:text-lime-500 dark:bg-lime-900/40 text-lime-500 bg-lime-100/40 rounded-xl text-xs font-bold px-2 py-1">
                          {t("Settings.account.ActiveDevices.thisDevice")}
                        </span>
                      )}
                    </div>
                    <span className="text-zinc-500 text-sm">{record.location}</span>
                  </div>
                </div>
                {!record.isCurrent && (
                  <RemoveDevice device={index} onRemoveDevice={(device) => setDevices(devices.filter((_, index) => index !== device))} />
                  )}
              </div>
            ))}
          </div>
        </div>
      );
}