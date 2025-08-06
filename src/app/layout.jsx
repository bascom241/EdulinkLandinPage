import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Hero from "@/components/hero";
import StatsSection from "@/components/User";
import TopCourses from "@/components/TopCourses";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/Faq";
import Comment from "@/components/Comment";
import Flow from "@/components/Flow";
import Footer from "@/components/Footer";
import { Suspense } from 'react';
import ClientOnly from "@/components/ClientOnly";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EduLink - Learning Platform",
  description: "Transform your learning experience with our innovative platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative font-clash flex flex-col gap-5">
          {/* Wrap client-side components in ClientOnly */}
          <ClientOnly>
            <NavBar />
            <Hero />
            <TopCourses />
            <StatsSection />
            <FAQ />
            <WhyUs />
            <Comment />
            <Flow />
          </ClientOnly>
        </div>
        {children}
        <ClientOnly>
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}