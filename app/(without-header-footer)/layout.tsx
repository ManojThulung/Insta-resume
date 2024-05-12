import Providers from "@/redux/Providers";

export const metadata = {
  title: "Create Resume",
  description:
    "Ready to create your professional resume? With InstaResume's user-friendly interface, crafting a standout CV is quick, easy, and hassle-free. Start building your career today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
