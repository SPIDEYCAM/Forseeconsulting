import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import { cn } from "@/lib/utils";

const raleway = Raleway({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Foresee Consulting",
  description: "Foresee Consulting Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", raleway.variable)}>
      <body>{children}</body>
    </html>
  );
}
