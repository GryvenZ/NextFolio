import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Theme } from "@radix-ui/themes";
import Navbar from "./components/Navbar";
import { Footer } from "./components";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ayroid",
  description: "Personal Portfolio of Ayroid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.variable}>
        <Theme accentColor="mint" radius="small" appearance="dark">
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </Theme>
      </body>
    </html>
  );
}
