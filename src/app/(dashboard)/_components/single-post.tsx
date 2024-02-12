"use server";

import { editPage } from "@/actions/pages";
import { Post as postModel } from "@prisma/client";

type singlePostProps = {
  post: postModel;
};

export default async function SinglePost({ post }: singlePostProps) {
  return (
    <div className="border border-black/10 p-4 mx-4">
      <p>Title: {post.title} </p>
      <p className="py-2">Content: {post.content}</p>
      <form action={editPage}>
        <input type="hidden" name="id" value={post.id} />
        <input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={post.title}
        />
        <textarea
          name="content"
          placeholder="Content"
          defaultValue={post.content}
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
      <button className="btn btn-outline">Delete</button>
      <button className="btn btn-disabled">Edit</button>
      <button className="btn btn-ghost">View</button>
    </div>
  );
}
