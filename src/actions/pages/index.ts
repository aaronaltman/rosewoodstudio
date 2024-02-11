"use server";

import prisma from "@/lib/db/db";
import { PageSchema } from "@/lib/zod-schema/contact-form"; // Adjust the import path as necessary

export async function PostPageForm(formData: FormData) {
  // Convert FormData to a plain object
  const formDataObject = {
    title: formData.get("title"),
    featuredimage: formData.get("featuredimage"),
    content: formData.get("content"),
    userId: formData.get("userId"),
  };

  // Validate the data using Zod
  const validation = PageSchema.safeParse(formDataObject);

  if (!validation.success) {
    // Handle validation failure
    console.error("Validation errors:", validation.error.issues);
    throw new Error("Validation failed"); // Or return a more specific error response
  }

  // If validation is successful, proceed with database operation
  const response = await prisma.pages.create({
    data: validation.data, // Use validated data
  });

  // Optionally, revalidate paths if using ISR
  // await revalidatePath('/some-path-to-revalidate');

  return response; // Or handle the response as needed
}
