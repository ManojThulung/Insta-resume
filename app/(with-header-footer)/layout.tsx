import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/redux/Providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InstaResume",
  description: "Generate your perfect resume in an instant.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Navbar />
      {children}
      <Footer />
    </Providers>
  );
}
