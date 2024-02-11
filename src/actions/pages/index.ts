"use server";
// pages/api/posts/create.js
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/db/db";

export async function createPage(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  // For optional fields, use nullish coalescing if you want to allow null values
  const featuredImage = formData.get("featuredImage") as string;
  const user = formData.get("userId") as string;

  // You might also want to ensure userId fits the expected type, e.g., number or UUID
  // This example assumes userId is a string for simplicity

  const createThePage = await prisma.pages.create({
    data: {
      title,
      content,
      featuredImage,
      user: {
        connect: {
          id: user,
        },
      },
    },
  });
}
