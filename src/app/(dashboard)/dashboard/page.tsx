"use server";
import DashboardHeader from "../_components/dashboard-header";
import CreatePageForm from "../_components/create-page-form";
import { auth, currentUser } from "@clerk/nextjs";
import prisma from "@/lib/db/db";
import SinglePost from "../_components/single-post";

export default async function DashboardPage() {
  const { userId } = auth();
  const user = await currentUser();

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
      <DashboardHeader />
      <CreatePageForm />
      <h2 className="col-span-2 text-xl font-bold py-10">Your Posts</h2>
      <p className="grid grid-cols-3 gap-y-6">
        {posts.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
      </p>
      {posts.length == 0 && <p>No posts yet</p>}
    </div>
  );
}
