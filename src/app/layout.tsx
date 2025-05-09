import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "athGADLANG - Strategic Accounting Partners",
  description:
    "Accounting expertise meets innovation. Your strategic partners in financial excellence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=0.9, maximum-scale=0.9, user-scalable=no"
      />
      <body
        className={`${inter.className} overflow-x-hidden origin-top`}
      >
        {children}
      </body>
    </html>
  );
}
