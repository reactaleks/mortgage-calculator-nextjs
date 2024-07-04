import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Mortage calculator",
  description: "A front end mentor project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
