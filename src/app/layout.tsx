import type { Metadata } from "next";
import { Poppins, Roboto_Slab, Rufina } from "next/font/google";
import "./globals.css";
import RivoHeader from "@/Components/Header/RivoHeader";

const poppins = Poppins({ 
  weight:['500','600'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const robotoSlab = Roboto_Slab({
  weight:['500','700'],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-robotoSlab",
})
const rufina = Rufina({
  weight:'700',
  display: "swap",
  subsets: ["latin"],
  variable: "--font-rufina",
});

export const metadata: Metadata = {
  title: "Rivo Fashion",
  description: "Rivo Fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${robotoSlab.variable} ${rufina.variable}`}>
        <RivoHeader/>
      {children}
      <footer className="min-h-10 lg:min-h-60">

      </footer>
      </body>
    </html>
  );
}
