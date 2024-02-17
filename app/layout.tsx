import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const spacegrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dope rss",
  description: "FOSS rss."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spacegrotesk.className}>
        <Navbar></Navbar>
          <div className="px-4">
            {children}
          </div>
      </body>
    </html>
  );
}
