import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Origamid | Sobre",
  description: "Criado no curso da Origamid",
};

// Components:
import { GetWidth } from "@/components/GetWidth/GetWidth";


export default function SobrePage() {
  
  return (
    <main className="SobrePage">
      <h1>Sobre</h1>
      <GetWidth />
    </main>
  )
}