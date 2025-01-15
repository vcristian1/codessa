import type { Metadata } from "next";
import { navItems } from "@/data";
import { Raleway } from "next/font/google";
import React from "react";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";



const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codessa",
  description: "A Chicago Web Design and Development Firm specializing in providing Custom Websites and Stress-Free Support to ensure you can focus on what matters most-your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={raleway.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}