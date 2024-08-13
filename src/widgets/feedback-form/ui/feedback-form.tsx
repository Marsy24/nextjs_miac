"use client";

import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  message: z.string(),
  agreement: z.boolean(),
});

interface IProps {
  className?: string;
}

export const FeedbackForm: React.FC<IProps> = ({ className }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      agreement: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        className={cn("", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="form__top flex items-center mb-5">
          <FormField
            name="fullName"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-auto mr-5">
                <FormLabel>Фамилия Имя Отчество</FormLabel>
                <FormControl>
                  <Input className="py-8 px-5" placeholder="ФИО" {...field} />
                </FormControl>
                <FormDescription>Введите ФИО</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-auto">
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input
                    className="py-8 px-5"
                    placeholder="Почтовый адрес"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Введите Ваш почтовый адрес для связи
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex-auto mb-10">
              <FormLabel>Сообщение</FormLabel>
              <FormControl>
                <Input
                  className="py-8 px-5 min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Введите Ваше сообщение
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button size={"lg"}  type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};
