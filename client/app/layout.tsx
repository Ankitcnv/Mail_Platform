import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Bulk Email Platform.",
  description: "Bulk Email Platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
