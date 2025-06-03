import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kept Kitchen Co. | Premium Private Chef Services",
  description: "Experience the luxury of a private chef. Exceptional cuisine, personalized menus, and impeccable service in the comfort of your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}