import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KDex",
  description: "KDex App v2.0",
  keywords: "pokedex, pokemon, app pokedex",
  creator: "Karlgarmor",
  authors: [{ name: "Karlgarmor", url: "https://karlgarmor.tech/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
