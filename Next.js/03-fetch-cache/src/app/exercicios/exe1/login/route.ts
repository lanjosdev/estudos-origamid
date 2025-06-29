import { cookies } from 'next/headers'; // Cookies do Next
import { NextRequest } from 'next/server'; // NextRequest é o tipo de requisição do Next.js e tem infos sobre a requisição, como o método, headers, etc.

export async function POST(req: NextRequest) {
    try {
        // Acessar corpo da requisição
        const body = await req.json();

        // Verificar se o corpo contém os campos necessários
        if(!body.username || !body.password) {
            return Response.json(
                { 
                    success: false,
                    message: 'Username e password são obrigatórios.' 
                },
                // { status: 400 },
            );
        }

        // Enviar os dados para a API externa de login
        const response = await fetch('https://api.origamid.online/conta/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: body.username,
                password: body.password,
            }),
        });

        // Verificar se a resposta da API é mal-sucedida
        if(!response.ok) {  
            return Response.json(
                {   
                    success: response.ok,
                    message: 'Falha no login. Verifique suas credenciais.' 
                },
                // { status: 401 },
            );
        }    

        // Obter os dados da resposta
        const data = await response.json(); 

        // Salvar o token de acesso nos cookies
        cookies().set('token', data.token, {
            secure: true, // só vai funcionar em https
            httpOnly: true,
            sameSite: 'lax',
        });
        

        return Response.json(
            { 
                success: response.ok,
                message: 'Login bem-sucedido.',
                // data: data,
            },
            { status: 200 },
        );
    }
    catch(error) {
        return Response.json(
            { error: 'Falha ao analisar requisição.' },
            { status: 400 },
        );
    }
}