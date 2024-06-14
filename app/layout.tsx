import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GamCap Labs",
  description: "Gamcap Labs is a company dedicated to blockchain data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col items-center justify-between">
          <Header />
          <main className="flex-grow w-full h-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
