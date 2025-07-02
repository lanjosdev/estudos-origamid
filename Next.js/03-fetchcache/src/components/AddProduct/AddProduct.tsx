// Formulario para adicionar um produto
// - Deve ser um componente client  
// - Deve ser importado na rota /produtos/adicionar
// - Deve ser um formulário com os campos nome, preco, descricao, estoque e importado   
// - O campo importado deve ser um checkbox
'use client';

import { useState } from "react";
import { Produto } from "@/app/exercicios/exe3/action-get-products";
import { actionAddProduct } from "@/app/exercicios/exe3/action-add-product";


export function AddProduct() {
    const [loading, setLoading] = useState(false);
    // Estado para armazenar a mensagem de sucesso ou erro
    const [hasError, setHasError] = useState<string | null>(null);    


    // Função para lidar com o envio do formulário
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setHasError(null);

        try {
            const data: Produto = {
                nome: event.currentTarget.nome.value,
                descricao: event.currentTarget.descricao.value,
                preco: Number(event.currentTarget.preco.value),
                estoque: Number(event.currentTarget.estoque.value),
                importado: event.currentTarget.importado.checked ? 1 : 0,
            };

            const response = await actionAddProduct(data);
            console.log(response);

            if(response.error) {
                setHasError('Ops, houve erro ao adicionar o produto.');
            } 
            else if(!response.success) {
                setHasError(response.message || 'Ops, houve uma falha ao adicionar o produto.');
            }
        }
        catch (error) {
            console.error('DETALHES DO ERRO:', error);
            setHasError('Ops, houve um erro.');
        }

        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" />

            <label htmlFor="preco">Preço</label>
            <input type="number" id="preco" />

            <label htmlFor="descricao">Descrição</label>
            <input type="text" id="descricao" />

            <label htmlFor="estoque">Estoque</label>
            <input type="number" id="estoque" />

            <label htmlFor="importado">
                <input type="checkbox" id="importado" />
                Importado
            </label>


            <button type="submit" disabled={loading}>
                {loading ? 'Adicionando...' : 'Adicionar'}
            </button>


            {hasError && <p className="error">{hasError}</p>}
        </form>
    );
}
