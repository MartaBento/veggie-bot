import { Metadata } from "next";

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
