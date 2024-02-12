"use server";

import prisma from "@/lib/db/db";
import { auth } from "@clerk/nextjs";

export async function createPage(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const { userId } = auth();

  if (!userId) {
    throw new Error("User not found.");
  }

  // Create a new page
  const newPage = await prisma.post.create({
    data: {
      title,
      content,
      userId,
    },
  });
  return newPage;
}
