'use server';

export type Produto = {
    id?: string;
    nome: string;
    preco: number;
    descricao: string;
    estoque: number;
    importado: 0 | 1;
};

export async function actionGetProducts() {
    try {
        // Enviar os dados para a API externa de login
        const response = await fetch('https://api.origamid.online/produtos', {
            next: { 
                revalidate: 60, // Revalidar a rota a cada 60 segundos       
                tags: ['products'] // Revalidar a rota /produtos
            }
        });

        // Verificar se a resposta da API é mal-sucedida
        if(!response.ok) {
            return {
                success: response.ok,
                message: 'Falha aos buscar produtos.'
            };
        }


        // Obter os dados da resposta
        const data = await response.json() as Produto[];

        return {
            success: response.ok,
            message: 'Produtos disponiveis.',
            data: data
        };
    }
    catch (error) {
        return {
            error: 'Erro na action'
        };
    }
}