"use client";
import React, { useEffect, useState } from "react";

export default function DashboardHeader() {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex justify-between navbar bg-primary">
        <a className="btn btn-ghost text-xl">Rosewood Studio Dashboard</a>
        <button onClick={toggleModal}>
          {open ? "Close Modal" : "Open Modal"}
        </button>
      </div>
      {open && (
        <div className="flex justify-end">This is the modal content!</div>
      )}
    </>
  );
}
