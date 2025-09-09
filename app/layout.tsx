import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MobileLayoutProvider } from "./components/MobileLayout";
import SessionProvider from "./components/SessionProvider";
import { getAllCategories } from "@/lib/blog";

const appFont = localFont({
  src: [{ path: "./fonts/D2Coding.ttf", style: "normal", weight: "100 900" }],
  display: "swap",
  preload: true,
  variable: "--font-app",
});

export const metadata: Metadata = {
  title: "BongsikDev",
  description: "A personal development blog built with Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getAllCategories();
  return (
    <html lang="ko" className={appFont.variable}>
      <body className="bg-background text-foreground font-sans antialiased min-h-screen">
        <SessionProvider>
          <div className="relative flex min-h-screen flex-col">
            <MobileLayoutProvider categories={categories}>
              <Header />
              {children}
            </MobileLayoutProvider>
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
