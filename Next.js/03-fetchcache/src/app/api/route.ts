// export async function GET() {
//     const response = await fetch('https://api.origamid.online/vendas', {
//         headers: {
//             apikey: 'ORIGAMID123456', // Chave exigida na API externa
//         },
//     });
//     const vendas = await response.json();

//     return Response.json(vendas);
// }


import { cookies } from 'next/headers'; // Cookies do Next
import { NextRequest } from 'next/server'; // NextRequest é o tipo de requisição do Next.js e tem infos sobre a requisição, como o método, headers, etc.

export async function GET() {
    const response = await fetch('https://api.origamid.online/conta/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: 'dog',
            password: 'dog',
        }),
    }); // Mesmo essa req sendo POST, esse endpoint não vai deixar de ser um GET, pois o Next.js não permite que a rota seja POST.

    if(!response.ok) {
        return Response.json({ erro: 'Erro na api' });
    }

    const data = await response.json();

    cookies().set('token', data.token, {
        secure: true, // só vai funcionar em https
        httpOnly: true,
        sameSite: 'lax',
    });

    return Response.json(data);
}


export async function POST(req: NextRequest) {
    try {
        // req.nextUrl é a URL da requisição, que pode conter parâmetros de consulta (query params)
        const param = req.nextUrl.searchParams.get('busca');

        // Acessar corpo da requisição
        const body = await req.json();

        return Response.json({ 
            param, 
            body 
        });
    } 
    catch(error) {
        return Response.json(
            { error: 'Falha ao analisar requisição.' },
            { status: 400 },
        );
    }
}