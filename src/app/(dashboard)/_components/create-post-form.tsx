import { PostPages } from "@/actions/pages";
import React from "react";

export default function CreatePostForm() {
  return (
    <form action={PostPages} className="flex flex-col gap-2 max-w-md mx-auto">
      <label htmlFor="posttitle">Post Title</label>
      <input id="posttitle" name="posttitle" type="text" className="input" />
      <label htmlFor="postcontent">Post Content</label>
      <textarea
        id="postcontent"
        name="postcontent"
        className="textarea textarea-bordered"
        placeholder="Bio"
      ></textarea>
      <button>Add Post</button>
    </form>
  );
}
