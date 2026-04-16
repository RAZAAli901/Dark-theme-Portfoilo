import { Inter } from "next/font/google";
import StarsBackground from "@/components/StarsBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Jeimeen Chaudhari - Portfolio",
  description: "Personal portfolio of Jeimeen Chaudhari, AI/ML Engineer and Web Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col relative text-white bg-[#050510] font-sans antialiased">
        <StarsBackground />

        <div className="blackhole hidden md:block">
          <div className="blackhole-ring"></div>
          <div className="blackhole-glow"></div>
        </div>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
