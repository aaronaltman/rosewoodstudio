"use server";

import prisma from "@/lib/db/db";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
  revalidatePath("/dashboard");
  redirect("/dashboard");
  return newPage;
}

export async function editPage(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const id = formData.get("id") as string;

  const { userId } = auth();

  if (!userId) {
    throw new Error("User not found.");
  }

  // Update the page
  const updatedPage = await prisma.post.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  });
  revalidatePath("/dashboard");
}
