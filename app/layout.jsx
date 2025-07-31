import { Geist, Geist_Mono } from "next/font/google";
import HeaderBar from "@/components/HeaderBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PastaFiamma",
  description: "Migliore Ristorante a Palermo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full max-w-[100%] mx-auto text-sm sm:text-base min-h-screen flex flex-col  bg-[#fff] `}>
        {/* colore rosso : #da291c*/ }
        <HeaderBar />
        {children}
      </body>
    </html>
  );
}
