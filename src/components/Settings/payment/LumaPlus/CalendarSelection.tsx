import React from "react";
import { ZeroEventsIcon } from "../../preferences/Notification/ZeroEventsIcon";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function CalendarSelection() {
  const [hasCalendars, setHasCalendars] = React.useState(false);
  const [selectedCalendar, setSelectedCalendar] = React.useState<string | null>(
    null
  );

  const { t } = useTranslation();

  return (
    <div
      className="my-4 border 
      dark:border-zinc-800 dark:bg-zinc-900 
      border-zinc-200 bg-zinc-100 
      bg-opacity-60 rounded-xl"
    >
      <div
        className={`flex flex-row justify-between p-4 dark:border-zinc-800 border-zinc-200`}
      >
        {!hasCalendars ? (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-between">
              <div className="flex flex-row gap-4">
                <ZeroEventsIcon className="w-[2.5rem]"/>
                <div className="flex flex-col gap-1">
                    <p className="text-zinc-500 text-xl font-bold">{t("Settings.payment.lumaPlus.calendarSection.noCalendars.title")}</p>
                    <span className="text-md text-zinc-500">{t("Settings.payment.lumaPlus.calendarSection.noCalendars.subtitle")}<Link href={'/create-calendar'} className="text-pink-500">{t("Settings.payment.lumaPlus.calendarSection.noCalendars.subtitleLink")}</Link>.</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-between">
              <div className="flex flex-row gap-2">
                <p className="dark:text-zinc-50 text-zinc-950"></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
