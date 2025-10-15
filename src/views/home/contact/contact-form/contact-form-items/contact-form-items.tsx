"use client";

import { Controller } from "react-hook-form";
import { Button, Input, Textarea } from "@/components";
import { useContactFormItems } from "./use-contact-form-items";

export const ContactFormItems = () => {
  const { control, handleContactFormSubmit } = useContactFormItems();

  return (
    <form
      onSubmit={handleContactFormSubmit}
      className="grid grid-cols-2 gap-10 w-full"
    >
      <div className="grid col-span-1">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input id="email" placeholder="Email" {...field} />
          )}
        />
      </div>
      <div className="grid col-span-1">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input id="name" placeholder="Name" {...field} />
          )}
        />
      </div>
      <div className="grid col-span-2">
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <Textarea id="message" placeholder="Message" {...field} />
          )}
        />
      </div>
      <Button size="lg" variant="default" className="grid col-span-2">
        Submit
      </Button>
    </form>
  );
};
