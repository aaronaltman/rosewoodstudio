import React from "react";
import DashboardHeader from "../_components/dashboard-header";
import CreatePostForm from "../_components/create-post-form";

export default function DashboardPage() {
  return (
    <div>
      <DashboardHeader />
      <CreatePostForm />
    </div>
  );
}
