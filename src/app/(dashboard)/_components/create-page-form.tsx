import { PostPageForm } from "@/actions/pages";
import React from "react";
import { auth, currentUser } from "@clerk/nextjs";
import { PageSchema } from "@/lib/zod-schema/contact-form";

export default async function CreatePageForm() {
  const user = await currentUser();
  const isAuth = auth();
  return (
    <>
      <form
        action={PostPageForm}
        className="flex flex-col gap-2 max-w-md mx-auto"
      >
        <input type="hidden" name="userId" value={user?.id} />
        <label htmlFor="title">Post Title</label>
        <input
          id="title"
          required={true}
          name="title"
          type="text"
          className="input"
        />
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
          required={true}
          className="textarea textarea-bordered"
          placeholder="Add Post Content"
        ></textarea>
        <button>Add Post</button>
      </form>
    </>
  );
}
