import Providers from "@/redux/Providers";

export const metadata = {
  title: "InstaResume",
  description: "Generate your perfect resume in an instant.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
