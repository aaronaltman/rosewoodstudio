// Define schema for Page
import { z } from "zod";

// Zod schema for creating a new post or page
export const contactFormSchema = z.object({
  title: z.string().min(3).max(100),
  content: z.string().min(10).max(1000),
  featuredImage: z.string().optional(),
  user: z.object({
    id: z.string(),
    name: z.string(),
    clerkId: z.string(),
  }),
});

// Export the schema so it can be used in your API route or form handling logic
