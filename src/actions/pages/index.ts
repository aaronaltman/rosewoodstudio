import prisma from "@/lib/db/db";
import { revalidatePath } from "next/cache";

// This function is used to post a page to the database
export async function PostPages(formData: FormData) {
  const response = await prisma.pages.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    },
  });
  revalidatePath("/pages");
}
