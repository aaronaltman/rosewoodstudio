import { createPage } from "@/actions/pages";
import React from "react";
import { UserButton, currentUser } from "@clerk/nextjs";

export default async function CreatePageForm() {
  const user = await currentUser();
  return (
    <>
      <h1>Create a New Posts</h1>
      <p>Welcome, {user?.firstName}</p>
      <p>Use the form below to create a new post.</p>
      <UserButton
        appearance={{
          elements: {
            avatarBox: {
              width: "4rem",
              height: "4rem",
            },
          },
        }}
      />
      <form
        action={createPage}
        className="flex flex-col gap-2 max-w-md mx-auto"
      >
        <label htmlFor="title">Post Title</label>
        <input
          id="title"
          name="title"
          type="text"
          className="input"
          placeholder="Enter a Title for Your Post"
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
