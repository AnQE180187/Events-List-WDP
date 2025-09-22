import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AIFSHOP - AI-powered Shopping Experience",
  description: "Shop smarter with AI-powered recommendations tailored just for you",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg" },
      { url: "/icons/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/icons/favicon-32x32.svg", sizes: "32x32", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/icons/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" }
    ],
    other: [
      { 
        rel: "mask-icon", 
        url: "/icons/aifshop-icon.svg",
        color: "#0072f5"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
