import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/UI/Footer/Footer";
import "@/styles/globals.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KASA",
  description: "Chez vous, partout et ailleurs",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
