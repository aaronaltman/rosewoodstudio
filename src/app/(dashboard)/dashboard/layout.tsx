import Footer from "@/components/global-ui/footer";
import SecondHeader from "@/components/global-ui/second-header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SecondHeader />
      {children}
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
}
