// import z as zod
import { z } from "zod";

// Define schema for Page
export const PageSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(3),
  featuredimage: z.string().optional(),
  userId: z.string(),
});
