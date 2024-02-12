"use server";

import { Post as postModel } from "@prisma/client";

type singlePostProps = {
  post: postModel;
};

export default async function SinglePost({ post }: singlePostProps) {
  return (
    <div className="border border-black/10 p-4 mx-4">
      <p>Title: {post.title} </p>
      <p className="py-2">Content: {post.content}</p>
      <button className="btn btn-outline">Delete</button>
      <button className="btn btn-disabled">Edit</button>
      <button className="btn btn-ghost">View</button>
    </div>
  );
}
