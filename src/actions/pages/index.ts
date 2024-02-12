"use server";

import prisma from "@/lib/db/db";

export async function createPage(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const userId = formData.get("userId") as string;

  // Ensure that required fields are not null or undefined
  if (!title || !content) {
    throw new Error("Missing required fields.");
  }

  // Create a new page
  const newPage = await prisma.posts.create({
    data: {
      title,
      content,
      userId,
    },
  });
}
