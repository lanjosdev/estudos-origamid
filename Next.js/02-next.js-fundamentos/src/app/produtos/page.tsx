import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Origamid | Produtos",
    description: "Criado no curso da Origamid",
};

// Components:


export default function ProdutosPage() {

    return (
        <main className="ProdutosPage">
            <h1>Produtos</h1>

            <p>LISTA DE PRODUTOS AQUI</p>
        </main>
    )
}