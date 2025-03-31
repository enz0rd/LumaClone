import { IoMailOpen } from "react-icons/io5";
import { NotificationPopover } from "./NotificationPopover";
import { AlarmClockIcon, Calendar, CalendarClock, FileText, Globe, Megaphone, Star, TicketPlus, UserCheck2, UserPlus2 } from "lucide-react";
import { LumaLogoSVG } from "@/components/LumaLogo";
import { SubscriptionSheet } from "./SubscriptionSheet";
import { useTranslation } from "react-i18next";


export function NotificationPreferences() {
  
  const { t } = useTranslation();
  const EventsThatYouParticipate = [
    {
      icon: <IoMailOpen />,
      title: t("Settings.preferences.notifications.eventsThatYouParticipate.eventInvites"),
      options: [
        { name: "E-mail", value: "email" },
        { name: "Push", value: "push" },
        { name: "SMS", value: "sms" },
      ],
    },
    {
      icon: <AlarmClockIcon />,
      title: t("Settings.preferences.notifications.eventsThatYouParticipate.eventReminders"),
      options: [
        { name: "E-mail", value: "email" },
        { name: "Push", value: "push" },
        { name: "SMS", value: "sms" },
      ],
    },
    {
      icon: <Megaphone />,
      title: t("Settings.preferences.notifications.eventsThatYouParticipate.eventTransmissions"),
      options: [
        { name: "E-mail", value: "email" },
        { name: "Push", value: "push" },
        { name: "SMS", value: "sms" },
      ],
    },
    {
      icon: <CalendarClock />,
      title: t("Settings.preferences.notifications.eventsThatYouParticipate.eventUpdates"),
      options: [
        { name: "E-mail", value: "email" },
        { name: "Push", value: "push" },
        { name: "SMS", value: "sms" },
      ],
    },
    {
      icon: <FileText />,
      title: t("Settings.preferences.notifications.eventsThatYouParticipate.feedbackRequests"),
      options: [
        { name: "E-mail", value: "email" },
        { name: "Push", value: "push" },
        { name: "SMS", value: "sms" },
      ],
    },
  ];
  
  const EventsThatYouHost = [
    {
      icon: <UserCheck2 />,
      title: t("Settings.preferences.notifications.eventsThatYouHost.newMembers"),
      options: [
        { name: "E-mail", value: "email" },
        { name: "Push", value: "push" },
        { name: "SMS", value: "sms" },
      ],
    },
    {
      icon: <Star />,
      title: t("Settings.preferences.notifications.eventsThatYouHost.feedbacks"),
      options: [
        { name: "E-mail", value: "email" },
        { name: "Push", value: "push" },
        { name: "SMS", value: "sms" },
      ],
    },
  ];
  
  const CalendarsThatYouControl = [
    {
      icon: <UserPlus2 />,
      title: t("Settings.preferences.notifications.calendarsThatYouManage.newMembers"),
      options: [
        { name: "E-mail", value: "email" },
        { name: "Push", value: "push" },
        { name: "SMS", value: "sms" },
      ],
    },
    {
      icon: <TicketPlus />,
      title: t("Settings.preferences.notifications.calendarsThatYouManage.eventSubmissions"),
      options: [
        { name: "E-mail", value: "email" },
        { name: "Push", value: "push" },
        { name: "SMS", value: "sms" },
      ],
    },
  ];
  
  const LumaUpdates = [{
    icon: <LumaLogoSVG />,
    title: t("Settings.preferences.notifications.luma.updates"),
    options: [
      { name: "E-mail", value: "email" },
      { name: "Push", value: "push" },
      { name: "SMS", value: "sms" },
    ],
  }];
  
  const Subscriptions = [
    {
      icon: <Globe />,
      title: t("Settings.preferences.notifications.yourSubscriptions.discoverPages"),
      type: "pages",
    },
    {
      icon: <Calendar />,
      title: t("Settings.preferences.notifications.yourSubscriptions.calendars"),
      type: "calendars",
    },
  ];

  return (
    <div className="my-8 pt-8 border-t w-full dark:border-zinc-800 border-zinc-200">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold dark:text-zinc-50 text-zinc-950">
          {t("Settings.preferences.notifications.title")}
        </h1>
      </div>
      <span className="text-md dark:text-zinc-300 text-zinc-700">
      {t("Settings.preferences.notifications.subtitle")}
      </span>
      <div className="flex flex-col gap-2 mt-4">
        <span className="text-sm font-semibold text-zinc-500">
        {t("Settings.preferences.notifications.eventsThatYouParticipate.title")}
        </span>
        <div className="flex flex-col">
          {EventsThatYouParticipate.map((content, index) => (
            <NotificationPopover
              key={index}
              content={content}
              index={index}
              totalCount={EventsThatYouParticipate.length}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <span className="text-sm font-semibold text-zinc-500">
        {t("Settings.preferences.notifications.eventsThatYouHost.title")}
        </span>
        <div className="flex flex-col">
          {EventsThatYouHost.map((content, index) => (
            <NotificationPopover
              key={index}
              content={content}
              index={index}
              totalCount={EventsThatYouHost.length}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <span className="text-sm font-semibold text-zinc-500">
        {t("Settings.preferences.notifications.calendarsThatYouManage.title")}
        </span>
        <div className="flex flex-col">
          {CalendarsThatYouControl.map((content, index) => (
            <NotificationPopover
              key={index}
              content={content}
              index={index}
              totalCount={CalendarsThatYouControl.length}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <span className="text-sm font-semibold text-zinc-500">
        {t("Settings.preferences.notifications.luma.title")}
        </span>
        <div className="flex flex-col">
          {LumaUpdates.map((content, index) => (
            <NotificationPopover
              key={index}
              content={content}
              index={index}
              totalCount={LumaUpdates.length}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4 mb-[5rem]">
        <span className="text-sm font-semibold text-zinc-500">
        {t("Settings.preferences.notifications.yourSubscriptions.title")}
        </span>
        <div className="flex flex-col">
          {Subscriptions.map((content, index) => (
            <SubscriptionSheet
              key={index}
              content={content}
              index={index}
              totalCount={Subscriptions.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
