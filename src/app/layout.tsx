import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valoriza | Tasación Inmobiliaria Inteligente con IA",
  description: "Obtén el valor exacto de tu propiedad en segundos. Plataforma SaaS líder para corredores, inversionistas y propietarios con análisis de mercado y estado mediante IA.",
  keywords: "tasación, inmobiliaria, chile, valor propiedad, IA, corretaje",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
