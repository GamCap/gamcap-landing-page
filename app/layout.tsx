import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeClient from "./theme/ThemeClient";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GamCap Labs",
  description: "Gamcap Labs is a company dedicated to blockchain data.",
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleTagManager gtmId={gtmId} />
        <ThemeClient>
          <div className="flex min-h-screen flex-col items-center justify-between">
            <main className="flex-grow w-full h-full">{children}</main>
          </div>
        </ThemeClient>
      </body>
    </html>
  );
}
