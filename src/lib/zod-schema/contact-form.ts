import { z } from "zod";

// Zod schema for creating or editing a post/page
export const postFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: "title is required" })
    .max(100, { message: "100 characters allowed" }),
  content: z.string().min(3).max(1000).optional(),
});

export type TPostFormSchema = z.infer<typeof postFormSchema>;

export const editPostFormSchema = postFormSchema.extend({
  id: z.string().min(1, { message: "post id is required" }),
});
