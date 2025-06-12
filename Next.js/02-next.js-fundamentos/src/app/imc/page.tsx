import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Origamid | IMC",
  description: "Criado no curso da Origamid",
};

// Components:
// import { GetWidth } from "@/components/GetWidth/GetWidth";
import { IMC } from "@/components/exercicios/IMC/IMC";


export default function IMCPage() {

  return (
    <main className="IMCPage">
      <h1>IMC</h1>

      <IMC />
    </main>
  )
}