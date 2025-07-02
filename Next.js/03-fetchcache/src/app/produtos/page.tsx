// - Criar as rotas /produtos e /produtos/adicionar
// - Na rota /produtos, faça um fetch para https://api.origamid.online/produtos e mostre a lista de produtos
// - Na rota /produtos/adicionar, crie um formulário para adicionar um produto.
// - Crie uma server action que faz um fetch ('POST') para https://api.origamid.online/produtos
// - O 'POST' deve possuir o tipo Produto abaixo, sem id
// - Quando o produto for adicionado, revalide a rota /produtos
// - Após revalidar, redirecione para a rota /produtos

import { actionGetProducts } from "../exercicios/exe3/action-get-products";


export default async function ProdutosPage() {
    const { data, error, message } = await actionGetProducts();

    return (
        <main className="ProdutosPage">
            <h1>Produtos</h1>

            {error && <p className="error">{error}</p>}
            {!data && message && <p className="message">{message}</p>}

            {data && (
                <ul>
                    {data.map((produto) => (
                        <li key={produto.id}>
                            {produto.nome}: R${produto.preco}
                        </li>
                    ))}

                    Total: {data.length} produtos
                </ul>
            )}
        </main>
    );
}