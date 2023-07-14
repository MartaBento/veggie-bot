import Navbar from "@/components/ui/navbar";
import "./globals.css";
import { Providers } from "./providers";
import { Metadata } from "next";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Veggie Bot",
    default: "Veggie Bot",
  },
  description:
    "Veggie Bot is an AI-powered application that serves as a Vegan Ingredient Checker.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
