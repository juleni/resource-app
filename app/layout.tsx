import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resource Next.js App",
  description: "Resources Collection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
