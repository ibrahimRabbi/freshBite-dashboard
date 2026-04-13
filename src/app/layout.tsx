import type { Metadata } from "next";
import "./globals.css";
import Wrapper from "@/utils/Wrapper";
import { Toaster } from "react-hot-toast";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Fresh bite",
  description: "meal planning system for a healthier lifestyle",
  icons : {
    icon: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Wrapper>
      <html lang="en">
        <body >
          {children}
        </body>
        <Toaster />

      </html>
    </Wrapper>
  );
}


// className={`${geistSans.variable} ${geistMono.variable} `}