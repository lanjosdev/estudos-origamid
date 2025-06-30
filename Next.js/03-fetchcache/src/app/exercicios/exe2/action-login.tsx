// - Crie uma ação que faça o login na API https://api.origamid.online/conta/login
// - A ação deve receber nome e senha como parâmetro
// - Crie um formulário com os campos nome e senha (use o componente Login da aula anterior)
// - Use a ação para fazer o login ao enviar o formulário
// - Coloque o token nos cookies com httpOnly: true
// - Crie uma ação que consiga pegar cookies (mesmo HTTPOnly), deve ser possível passar a chave/valor
// - Use um botão para ativar essa ação, ela deve retornar o valor do cookie e ele deve ser mostrado na tela

'use server';

import { cookies } from 'next/headers'; // Cookies do Next


export async function actionLogin(username: string, password: string) {
  try {
    // Verificar se o corpo contém os campos necessários
    if(!username || !password) {
      return { 
        success: false, 
        message: 'Username e password são obrigatórios.' 
      };
    }

    // Enviar os dados para a API externa de login
    const response = await fetch('https://api.origamid.online/conta/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    // Verificar se a resposta da API é mal-sucedida
    if(!response.ok) {
      return {
        success: response.ok, 
        message: 'Falha no login. Verifique suas credenciais.'
      };
    }

    // Obter os dados da resposta
    const data = await response.json();

    // Salvar o token de acesso nos cookies
    cookies().set('token', data.token, {
      secure: true, // só vai funcionar em https
      httpOnly: true,
      sameSite: 'lax',
    });


    return {
      success: response.ok,
      message: 'Login bem-sucedido.'
    };
  }
  catch(error) {
    return { 
      error: 'Falha na action' 
    };
  }
}