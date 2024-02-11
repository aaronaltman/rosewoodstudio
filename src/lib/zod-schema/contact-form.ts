import { z } from "zod";

// Zod schema for creating or editing a post/page
export const postFormSchema = z.object({
  title: z.string().min(3).max(100),
  content: z.string().min(10).max(1000),
  featuredImage: z.string().optional(),
  categoryId: z.string().optional(), // Optional category ID
  user: z
    .object({
      id: z.string(),
      name: z.string().optional(), // Assuming name might not be mandatory
      clerkId: z.string(),
    })
    .optional(), // Consider if user info should be optional based on your logic
});

// Export the schema so it can be used in your API route or form handling logic
