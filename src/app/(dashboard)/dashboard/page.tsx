"use server";
import DashboardHeader from "../_components/dashboard-header";
import CreatePageForm from "../_components/create-page-form";
import { auth, currentUser } from "@clerk/nextjs";
import prisma from "@/lib/db/db";

export default async function DashboardPage() {
  const { userId } = auth();
  if (!userId) {
    throw new Error("You must be signed in");
  }
  console.log("add item server action");

  const posts = await prisma.post.findMany({
    where: {
      userId,
    },
  });

  return (
    <div>
      <p>{JSON.stringify(posts)}</p>
      <DashboardHeader />
      <CreatePageForm />
    </div>
  );
}
