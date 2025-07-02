'use server';

import { Produto } from "./action-get-products";
import { revalidateTag } from "next/cache";


type StatusMessages = {
  [key: number]: string;
};
const statusMessages: StatusMessages = {
  400: 'Dados inválidos, preencha corretamente.',
  404: 'Ops, falha ao prosseguir.',
};

export async function actionAddProduct(productData: Produto) {
  try {
    // Enviar os dados para a API externa para adicionar o produto
    const response = await fetch('https://api.origamid.online/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    // Verificar se a resposta da API é mal-sucedida
    if (!response.ok) {
      return {
        success: response.ok,
        message: statusMessages[response.status] || 'Ops, houve uma falha ao adicionar o produto.',
      };
    }
    

    // Obter os dados da resposta
    const data = await response.json();

    // Revalidar a rota /produtos para refletir as mudanças
    revalidateTag('products');
    
    return {
      success: response.ok,
      message: 'Produto cadastrado com sucesso.',
      data: data,
    };
  }
  catch (error) {
    return {
      error: 'Erro na action'
    };
  }
}

