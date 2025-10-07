import { useForm } from "react-hook-form";
import { z } from "zod";

const ContactFormSchema = z.object({
  email: z.string(),
  name: z.string(),
  message: z.string(),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>;

export const useContactFormItems = () => {
  const { control, handleSubmit } = useForm<ContactFormValues>({
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const handleContactFormSubmit = handleSubmit(() => {
    console.log("submitted");
  });

  return {
    control,
    handleContactFormSubmit,
  };
};
