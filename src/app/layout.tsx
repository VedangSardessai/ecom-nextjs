import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationComponent from "./navigation/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecom",
  description: "Built by VS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationComponent />
        {children}
      </body>
    </html>
  );
}
