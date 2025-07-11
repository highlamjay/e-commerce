import type { Metadata } from "next";
import "./globals.css"; 
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "E-commerce App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
          {children}
      </body>
    </html>
  );
}
