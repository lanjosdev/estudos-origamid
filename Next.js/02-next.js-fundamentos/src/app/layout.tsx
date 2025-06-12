import type { Metadata } from "next";
import "./styles/globals.css";

// Components:
import Menu from "@/components/Menu/Menu";


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
        <Menu />
        
        {children}
      </body>
    </html>
  );
}