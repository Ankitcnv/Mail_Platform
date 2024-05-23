import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import { toast, Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Bulk Email Platform | Dashboard",
  description: "Optimise Your Work Flow by Integreating the Bulk Email Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <NavBar />
        <Toaster position="top-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
