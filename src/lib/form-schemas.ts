
import * as z from "zod";

// Define the schema for the contact form values
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

// Define the type for the contact form values based on the schema
export type ContactFormValues = z.infer<typeof contactFormSchema>;
