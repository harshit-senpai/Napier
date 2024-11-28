"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { EditUserProfileSchema } from "@/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { User } from "@prisma/client";

type props = {
  user: User | null;
  onUpdate: (name: string) => void;
};

export const ProfileForm = ({ user, onUpdate }: props) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: "onChange",
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
  });

  const handleSubmit = async (
    values: z.infer<typeof EditUserProfileSchema>
  ) => {
    setIsLoading(true);
    await onUpdate(values.name);
    setIsLoading(false);
  };

  useEffect(() => {
    form.reset({ name: user?.name ?? "", email: user?.email });
  }, [user]);

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          disabled={isLoading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">User Full Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Name"
                  className="max-w-72"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">User Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={true}
                  placeholder="example@gmail.com"
                  className="max-w-72"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="self-start hover:bg-[#2F006B] hover:text-white "
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving
            </>
          ) : (
            "Save User Settings"
          )}
        </Button>
      </form>
    </Form>
  );
};
