import { Inter } from "next/font/google";
import "./globals.css";
import "./ckeditor.css";
import { Logo } from "@/assets/img";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "InstaResume",
  },
  description:
    "InstaResume. Your go-to platform for creating polished resumes in minutes. Explore multiple templates, customize effortlessly, and download your professional resume as a PDF.",
  referrer: "origin-when-cross-origin",
  applicationName: "InstaResume",
  authors: [
    { name: "Manoj" },
    { name: "Manoj", url: "https://manojrai.info.np" },
  ],
  creator: "Manoj Rai",
  openGraph: {
    title: "InstaResume",
    description:
      "InstaResume. Your go-to platform for creating polished resumes in minutes. Explore multiple templates, customize effortlessly, and download your professional resume as a PDF.",
    url: "https://instaresume.com",
    images: [Logo.src],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaResume",
    description:
      "InstaResume. Your go-to platform for creating polished resumes in minutes. Explore multiple templates, customize effortlessly, and download your professional resume as a PDF.",
    images: [Logo.src], // Must be an absolute URL
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
