import type { Metadata } from "next";
import { Inter, Rajdhani as rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import localFont from "next/font/local";
const Sentient = localFont({
  src: "../../public/fonts/Rajdhani/Rajdhani-Bold.otf",
  variable: "--font-sentient",
});
const Rajdhani = rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["sans", "serif"],
  display: "auto",
  preload: true,
  style: "normal",
  subsets: ["latin"],
  variable: "--font-rajdhani",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edlern",
  description: "An EdTech Platform enabling students and teachers to connect",
  icons: "/favIcon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${Rajdhani.variable} ${Sentient.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
