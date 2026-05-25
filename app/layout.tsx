
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

import ResponsiveNav from "@/components/Home/Nabar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Hepler/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";

const font = Sora({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webdev Portfolio",
  description: "Webdev portfolio with next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={font.className}>
        
        <div className="hidden md:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={2}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "white",
            }}
            outerStyle={{
              border: "3px solid white",
            }}
          />
        </div>

        <ResponsiveNav />

        {children}

        <Footer />
        <ScrollToTop />

      </body>
    </html>
  );
}