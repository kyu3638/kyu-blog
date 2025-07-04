import type { Metadata } from "next";
import "@/shared/styles/globals.css";
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
  title: "KYU BLOG",
  description: "학습과 경험을 기록하는 기술 블로그입니다.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${pretendard.variable} ${firaMono.variable} font-pretendard flex h-0 min-h-screen flex-col bg-gray-100 text-gray-800`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
