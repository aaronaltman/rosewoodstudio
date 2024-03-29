import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rosewood Studio",
  description: "All of your flower needs in one place!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="cupcake">
        <body className={inter.className}>
          <div className="flex flex-col max-w-5xl mx-auto bg-base-300 min-h-screen">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
