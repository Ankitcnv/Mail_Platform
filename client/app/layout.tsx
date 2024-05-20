import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import { toast, Toaster } from "react-hot-toast";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Bulk Email Platform | CNV Money",
  description: "Bulk Email Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
