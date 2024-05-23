import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import { toast, Toaster } from "react-hot-toast";
import { Suspense } from "react";
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
        <Suspense>
          <Toaster position="top-right" />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
