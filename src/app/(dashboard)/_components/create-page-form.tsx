import { createPage } from "@/actions/pages";
import React from "react";
import { currentUser } from "@clerk/nextjs";

export default async function CreatePageForm() {
  const user = await currentUser();
  return (
    <>
      <h1>Create a New Posts</h1>
      <p>Use the form below to create a new post.</p>
      <p>
        {user?.firstName}, {user?.id}, {user?.emailAddresses[0].emailAddress}
      </p>
      <form
        action={createPage}
        className="flex flex-col gap-2 max-w-md mx-auto"
      >
        <label htmlFor="title">Post Title</label>
        <input id="title" name="title" type="text" className="input" />
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
