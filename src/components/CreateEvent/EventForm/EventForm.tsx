import React from "react";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, ChevronDown } from "lucide-react";
import { BsArrowBarDown, BsCheckCircleFill } from "react-icons/bs";
import CreateCalendar from "@/components/Calendars/CreateCalendar";

const eventFormSchema = z.object({
  image: z.string().min(1, "Selecione uma imagem"),
  theme: z.string().min(1, "Selecione um tema"),
  calendar: z.number().min(1, "Selecione um calendário"),
  title: z.string().min(1, "Título é obrigatório"),
  event_start: z.date().refine((date) => date > new Date(), {
    message: "A data de início deve ser no futuro",
  }),
  event_end: z.date().refine((date) => date > new Date(), {
    message: "A data de término deve ser no futuro",
  }),
  timezone: z.string().min(1, "Selecione um fuso horário"),
  description: z.string().optional(),
  location: z.string(),
  tickets: z.boolean(),
  require_approval: z.boolean(),
  capacity: z.number(),
});

type EventFormSchema = z.infer<typeof eventFormSchema>;

export default function EventForm() {
  const { t } = useTranslation();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EventFormSchema>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      image: localStorage.getItem("eventImage")
        ? JSON.parse(localStorage.getItem("eventImage")!).image
        : "",
      theme: "",
      calendar: 0,
      title: "",
      event_start: new Date(),
      event_end: new Date(),
      timezone: "",
      description: "",
      location: "",
      tickets: false,
      require_approval: false,
      capacity: 0,
    },
  });

  const selectedCalendar = watch("calendar");

  const onSubmit = async (data: EventFormSchema) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <DropdownMenu {...register("calendar")}>
          <DropdownMenuTrigger asChild>
            <button className="dark:bg-zinc-700/50 bg-zinc-400/50 rounded-lg flex flex-row gap-2 items-center align-middle px-2 py-1">
              <div className="h-4 w-4 bg-pink-500 rounded-full" />
              <span className="text-sm font-semibold text-zinc-500">
                Personal Calendar
              </span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark:bg-zinc-800/90 bg-zinc-200/90 rounded-lg">
            <DropdownMenuLabel className="text-xs font-semibold text-zinc-500">
              Choose the calendar of the event:
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={selectedCalendar.toString()}
              onValueChange={(value) => setValue("calendar", parseInt(value))}
              className=""
            >
              {Array.from({ length: 5 }, (_, i) => (
                <DropdownMenuRadioItem
                  value={i.toString()}
                  key={i}
                  className="flex justify-between items-center px-2 py-2"
                >
                  <div className="flex flex-row w-full justify-between items-center">
                    <div className="flex flex-row gap-2 items-center">
                      <div className="h-4 w-4 bg-zinc-500 z-[5] rounded-full" />
                      <span className="text-sm font-semibold text-zinc-500">
                        Personal Calendar
                      </span>
                    </div>
                    {selectedCalendar === i && (
                      <BsCheckCircleFill className="z-[5] h-4 w-4 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-full" />
                    )}
                  </div>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <CreateCalendar />
          </DropdownMenuContent>
        </DropdownMenu>
      </form>
    </div>
  );
}
