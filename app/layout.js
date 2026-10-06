import { Bricolage_Grotesque, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./SmoothScroll";
import Cursor from "./Cursor";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex" });
export const metadata = {
  title: "The Garage Society: a private club for motorcycle collectors",
  description: "Keep your collection, name your wishlist, and meet members who ride what you ride.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body><SmoothScroll /><Cursor />{children}</body>
    </html>
  );
}
