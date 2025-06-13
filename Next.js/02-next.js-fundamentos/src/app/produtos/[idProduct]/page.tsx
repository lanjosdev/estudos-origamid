import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Origamid | Produtos",
    description: "Criado no curso da Origamid",
};


type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
};

type PageParams = {
  params: {
    idProduct: string;
  };
};

export default async function ProductPage({ params }: PageParams) {
  // console.log("Props:", props); // log apenas no servidor
  const response = await fetch(
    `https://api.origamid.online/produtos/${params.idProduct}`,
  );
  const data = (await response.json()) as Produto;

  return (
    <main className="ProductPage">
      <h1>Produto: {data.nome} (id = {params.idProduct})</h1>
      <h2>R$ {data.preco}</h2>
      <p>{data.descricao}</p>
    </main>
  );
}