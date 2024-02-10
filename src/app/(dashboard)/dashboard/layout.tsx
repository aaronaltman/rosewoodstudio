import Footer from "@/components/global-ui/footer";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
}
