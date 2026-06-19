import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

import ResponsiveNav from "@/components/Home/Nabar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

import AnimatedCursor from "react-animated-cursor";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Tag Institute",
  description: "Creative Tag Institute - Modern learning platform for creative and technology professionals",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-[#050709]`}>
        {/* Animated Cursor */}
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: '#3b82f6'
          }}
          outerStyle={{
            border: '3px solid #3b82f6'
          }}
        />
        
        {/* Navigation */}
        <ResponsiveNav />
        
        {/* Main Content */}
        <main>{children}</main>
        
        {/* Footer */}
        <Footer />
        
        {/* Scroll to Top Button */}
        
      </body>
    </html>
  );
}