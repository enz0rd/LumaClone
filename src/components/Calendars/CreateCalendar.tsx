import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { ArrowUp, Check, CircleDashed, Plus } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const colors = [
  "#d2d4d7",
  "#F98DBE",
  "#D27CFE",
  "#B596FF",
  "#76ADFF",
  "#77D86B",
  "#F2CA77",
  "#FBA67A",
  "#FF766D",
];

const createCalendarSchema = z.object({
  image: z.string().optional(),
  name: z.string().min(1, "Calendar name is required"),
  description: z.string().optional(),
  tint_color: z
    .string()
    .min(1, "Select a color")
    .refine((color) => {
      return colors.includes(color);
    }),
});

type CreateCalendarSchema = z.infer<typeof createCalendarSchema>;

export default function CreateCalendar() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateCalendarSchema>({
    resolver: zodResolver(createCalendarSchema),
  });

  const selectedColor = watch("tint_color");

  const onSubmit = (data: CreateCalendarSchema) => {
    console.log(data);
  };

  return (
    <Dialog open={true}>
      <DialogTrigger asChild>
        <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-400/50 rounded-lg flex flex-row gap-2 items-center align-middle px-2 py-1">
          <Plus className="h-4 w-4 dark:text-zinc-300 text-zinc-700" />
          <span className="text-md font-semibold dark:text-zinc-300 text-zinc-700">
            Create Calendar
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="dark:bg-zinc-900/90 bg-zinc-200/90 rounded-2xl max-w-[20rem] w-[90%]">
        <DialogTitle className="hidden">Create a calendar</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Upload Image */}
          <label className="text-sm font-semibold text-zinc-500 w-fit group cursor-pointer">
            <div className="flex flex-row">
              <div className="flex bg-gradient-to-tr from-zinc-300 via-pink-400 to-zinc-50 size-16 rounded-lg">
                <CircleDashed className="m-auto h-10 w-10 text-zinc-900 rounded-lg" />
              </div>
              <ArrowUp className="self-end z-[5] ml-[-1.5rem] size-6 bg-zinc-50 group-hover:bg-pink-500 transition 2s ease-in-out px-1 py-[.2rem] rounded-lg text-zinc-900 border-2 border-zinc-50 dark:border-zinc-800" />
            </div>
            <input
              {...register("image")}
              accept="image/png, image/jpeg"
              type="file"
              className="hidden"
            />
          </label>

          {/* Name and Description */}
          <div className="w-full flex flex-col mt-2">
            <input
              {...register("name")}
              type="text"
              placeholder="Calendar Name"
              className="border-b-[.005rem] pb-2 dark:border-zinc-700 border-zinc-300 
              text-xl font-semibold dark:placeholder:text-zinc-500 placeholder:text-zinc-300 bg-transparent
              hover:dark:border-zinc-300 hover:border-zinc-800 transition ease-in-out outline-none focus-within:outline-none"
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}

            <input
              {...register("description")}
              type="text"
              placeholder="Add a short description"
              className="bg-transparent border-none outline-none text-md 
              dark:placeholder:text-zinc-500 placeholder:text-zinc-300 pt-2"
            />
          </div>

          {/* Tint Color Selection */}
          <div className="flex flex-col gap-2 mt-2">
            <label className="text-sm font-semibold dark:text-zinc-300 text-zinc-700">
              Tint Color
            </label>

            <RadioGroup
              value={selectedColor}
              onValueChange={(color) => setValue("tint_color", color)}
              className="flex flex-row w-full justify-between flex-wrap items-center gap-2"
            >
              {colors.map((color) => (
                <RadioGroupItem
                  key={color}
                  value={color}
                  className="hidden"
                  id={color}
                />
              ))}
              {colors.map((color) => (
                <label
                  key={color}
                  htmlFor={color}
                  className="rounded-full flex justify-center items-center size-5 cursor-pointer"
                  style={{ backgroundColor: color }}
                >
                  <Check
                    className={`size-3 rounded-full m-auto text-zinc-900 transition-all duration-200 ease-in-out ${
                      selectedColor === color ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </label>
              ))}

              {/* Adicionando o Color Picker */}
              <input
                type="color"
                value={selectedColor}
                onPointerUp={(e) => { console.log((e.target as HTMLInputElement).value), setValue("tint_color", (e.target as HTMLInputElement).value)}}
                className="size-5 rounded-full border-none cursor-pointer appearance-none"
              />
            </RadioGroup>

            {errors.tint_color && (
              <span className="text-red-500 text-xs">
                {errors.tint_color.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Create
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
