import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Suruh Surabaya",
  description:
    "Jasa Suruh Surabaya - Survey kos, ambil barang, titip beli, antar dokumen, dan kebutuhan lainnya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}