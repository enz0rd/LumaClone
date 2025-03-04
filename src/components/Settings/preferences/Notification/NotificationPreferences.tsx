import { IoMailOpen } from "react-icons/io5";
import { NotificationPopover } from "./NotificationPopover";
import { AlarmClockIcon, Calendar, CalendarClock, FileText, Globe, Megaphone, Star, TicketPlus, UserCheck2, UserPlus2 } from "lucide-react";
import { LumaLogoSVG } from "@/components/LumaLogo";
import { SubscriptionSheet } from "./SubscriptionSheet";

const EventsThatYouParticipate = [
  {
    icon: <IoMailOpen />,
    title: "Convites para Eventos",
    options: [
      { name: "E-mail", value: "email" },
      { name: "Push", value: "push" },
      { name: "SMS", value: "sms" },
    ],
  },
  {
    icon: <AlarmClockIcon />,
    title: "Lembretes de Eventos",
    options: [
      { name: "E-mail", value: "email" },
      { name: "Push", value: "push" },
      { name: "SMS", value: "sms" },
    ],
  },
  {
    icon: <Megaphone />,
    title: "Transmissões do Evento",
    options: [
      { name: "E-mail", value: "email" },
      { name: "Push", value: "push" },
      { name: "SMS", value: "sms" },
    ],
  },
  {
    icon: <CalendarClock />,
    title: "Atualizações do Evento",
    options: [
      { name: "E-mail", value: "email" },
      { name: "Push", value: "push" },
      { name: "SMS", value: "sms" },
    ],
  },
  {
    icon: <FileText />,
    title: "Solicitações de Feedback",
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
    title: "Registros de Convidados",
    options: [
      { name: "E-mail", value: "email" },
      { name: "Push", value: "push" },
      { name: "SMS", value: "sms" },
    ],
  },
  {
    icon: <Star />,
    title: "Respostas de Feedback",
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
    title: "Novos Membros",
    options: [
      { name: "E-mail", value: "email" },
      { name: "Push", value: "push" },
      { name: "SMS", value: "sms" },
    ],
  },
  {
    icon: <TicketPlus />,
    title: "Submissões de Eventos",
    options: [
      { name: "E-mail", value: "email" },
      { name: "Push", value: "push" },
      { name: "SMS", value: "sms" },
    ],
  },
];

const LumaUpdates = [{
  icon: <LumaLogoSVG />,
  title: "Atualizações do Produto",
  options: [
    { name: "E-mail", value: "email" },
    { name: "Push", value: "push" },
    { name: "SMS", value: "sms" },
  ],
}];

const Subscriptions = [
  {
    icon: <Globe />,
    title: "Páginas de Descoberta do Luma",
    type: "pages",
  },
  {
    icon: <Calendar />,
    title: "Calendários",
    type: "calendars",
  },
];

export function NotificationPreferences() {
  return (
    <div className="my-8 pt-8 border-t w-full dark:border-zinc-800 border-zinc-200">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold dark:text-zinc-50 text-zinc-950">
          Notificações
        </h1>
      </div>
      <span className="text-md dark:text-zinc-300 text-zinc-700">
        Escolha como você gostaria de ser notificado sobre atualizações,
        convites e assinaturas.
      </span>
      <div className="flex flex-col gap-2 mt-4">
        <span className="text-sm font-semibold text-zinc-500">
          Eventos que Você Participa
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
          Eventos que você hospeda
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
          Calendários que você gerencia
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
          Luma
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
          Suas Assinaturas
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
