import type { Metadata } from "next";
import "./globals.css";

// Components
import { Header } from "@/components/Header/Header";


export const metadata: Metadata = {
  title: "Origamid Next",
  description: "Criado no curso da Origamid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        
        {children}
      </body>
    </html>
  );
}
