// - Crie uma rota chamada api/login
// - A rota deve receber um username e password via POST
// - Utilize a api https://api.origamid.online/conta/login
// - Envie o username e password para a api e salve o token de acesso nos cookies (httpOnly)
// - A rota deve retornar se o login foi bem sucedido ou não
// - Crie um formulário usando client components para fazer o login
// - Diretamente no server component, faça um fetch para a api de perfil
// - Utilize a api https://api.origamid.online/conta/perfil
// - Use o token de acesso salvo nos cookies para fazer a requisição (header -> Authorization: Bearer token)
// - Modifique o menu para mostrar o nome do usuário logado
// - Se o usuário não estiver autorizado, mostre um link para a página de login no menu

export async function GET() {
    return Response.json({
        method: 'GET',
        ok: true,
    });
}