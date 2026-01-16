import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rupesh Piwal | Web/Browser Engineer",
  description:
    "I build interactive web apps using TypeScript, React, Next.js, and Tailwind CSS. Enthusiastic about creating seamless user experiences.",
  keywords: [
    "Rupesh Piwal",
    "Web Developer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Rupesh Piwal" }],
  creator: "Rupesh Piwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rupeshpiwal.dev",
    siteName: "Rupesh Piwal Portfolio",
    title: "Rupesh Piwal | Web/Browser Engineer",
    description:
      "I build interactive web apps using TypeScript, React, Next.js, and Tailwind CSS.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rupesh Piwal - Web/Browser Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupesh Piwal | Web/Browser Engineer",
    description:
      "I build interactive web apps using TypeScript, React, Next.js, and Tailwind CSS.",
    images: ["/og-image.png"],
    creator: "@rupeshpiwal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
