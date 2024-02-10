"use client";

import React, { useEffect } from "react";
import handleContactFormAction from "@/actions/contact-form";

export default function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [toast, setToast] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const clearForm = () => {
    setToast(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="py-10 max-w-md">
      <h2>The Contact Form</h2>
      <form
        action={handleContactFormAction}
        onSubmit={clearForm}
        className="flex flex-col gap-x-6"
      >
        <div className="py-4">
          <input
            id="name"
            type="name"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs my-2"
            // required={true}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs my-2"
            // required={true}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <textarea
          className="textarea textarea-bordered resize-none"
          placeholder="Bio"
          rows={3}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <button className="btn btn-primary my-4">submit me!</button>
      </form>
      {toast && (
        <div className="toast toast-start">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
}
