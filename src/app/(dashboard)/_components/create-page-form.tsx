import { createPage } from "@/actions/pages";
import React from "react";
import { currentUser } from "@clerk/nextjs";

export default async function CreatePageForm() {
  const user = await currentUser();
  return (
    <>
      <form
        action={createPage}
        className="flex flex-col gap-2 max-w-md mx-auto"
      >
        <input type="hidden" name="userId" id="userId" value={user?.id} />
        <label htmlFor="title">Post Title</label>
        <input id="title" name="title" type="text" className="input" />
        <label htmlFor="featuredimage">Featured Image</label>
        <input
          id="featuredimage"
          name="featuredimage"
          type="text"
          className="input"
        />
        <label htmlFor="content">Post Content</label>
        <textarea
          id="content"
          name="content"
          className="textarea textarea-bordered"
          placeholder="Add Post Content"
        />
        <button>Add Post</button>
      </form>
    </>
  );
}
