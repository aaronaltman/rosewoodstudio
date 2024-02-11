"use server";

import prisma from "@/lib/db/db";

export async function createPage(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  // Ensure that required fields are not null or undefined
  if (!title || !content) {
    throw new Error("Missing required fields.");
  }

  const createThePage = await prisma.pages.create({
    data: {
      title,
      content,
    },
  });

  return createThePage; // Returning the created page might be useful
}
