import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Challenges', href: '/challanges' },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Workshops', href: '/workshops' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Venue', href: '/venue' },
];

export const metadata: Metadata = {
  title: "SIGHT DAY CONGRESS",
  description: "The Sight Day Congress (SDC 3.0) is the annual congress of all SIGHT groups in the Tunisia section, and this edition is proudly hosted by SIGHT Group ISIMM SB, IEEE ISIMM SB, and IEEE SIGHT Group Tunisia Section.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar  navigation={navigation} />
        
        {children}
      </body>
    </html>
  );
}
