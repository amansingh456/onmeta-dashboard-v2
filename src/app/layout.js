import "./globals.css";
import { Quicksand, Satisfy } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-satisfy",
  display: "swap",
});

export const metadata = {
  title: "ONMETA-DASHBOARD",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${quicksand.className} ${satisfy.variable}`}>
      <body>{children}</body>
    </html>
  );
}
