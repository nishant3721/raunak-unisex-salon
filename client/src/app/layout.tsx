import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "@/layout/app-header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raunak Unisex Salon",
  description: "Haircut, Shave, Waxing, Facial, Manicure, Pedicure, Hair Color, Hair Spa, Hair Straightening, Hair Smoothening, Hair Rebonding, Hair Perming, Hair Styling, Hair Treatment, Hair Extension, Hair Patch, Hair Wig, Hair Bonding, Hair Weaving",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
