import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Fira_Mono } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/layout/Footer";

const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-fira-mono",
});

const pretendard = localFont({
  src: "../shared/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "kyu-blog",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${pretendard.variable} ${firaMono.variable} font-pretendard flex min-h-screen flex-col bg-gray-100 text-gray-800`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
