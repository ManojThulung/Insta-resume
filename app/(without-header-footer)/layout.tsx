import { Inter } from "next/font/google";
import "../globals.css";
import "../ckeditor.css";
import Providers from "@/redux/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InstaResume",
  description: "Generate your perfect resume in an instant.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
