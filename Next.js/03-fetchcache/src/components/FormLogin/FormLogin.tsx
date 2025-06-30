'use client';
import { useState } from "react";

export function FormLogin() {
    const [isLoading, setIsLoading] = useState(false); // Estado para indicar se o formulário está sendo enviado
    const [hasError, setHasError] = useState<string | null>(null); // Estado para armazenar erros
    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });



    // Função para lidar com mudanças nos campos do formulário
    const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHasError(null); // Limpar mensagem de erro ao digitar

        // Desestruturar o id e o value do evento
        const { id, value } = event.target;

        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    }


    // SUBMIT FORM
    async function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true); // Indicar que o formulário está sendo enviado
        setHasError(null); // Limpar mensagem de erro ao enviar o formulário
        
        // Enviar os dados do formulário para a rota de login (/exercicios/exe1/login)
        try {
            const response = await fetch('/exercicios/exe1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Verificar se a resposta foi bem-sucedida
            if(!response.ok) { 
                // Se a resposta não for bem-sucedida, exibir mensagem de erro
                setHasError('Falha ao fazer login. Tente novamente.');
                setIsLoading(false);
                return;
            }

            const data = await response.json();

            if(data.success) {
                // Se o login for bem-sucedido, redirecionar para a página inicial
                window.location.href = '/';
            } 
            else {
                // Se o login falhar, exibir mensagem de erro
                setHasError('Usuário ou senha inválidos. Tente novamente.');
            }
        } 
        catch(error) {
            console.error('Erro ao fazer login:', error);
            // Exibir mensagem de erro para o usuário
            setHasError('Erro ao fazer login. Tente novamente.');
        }

        setIsLoading(false); // Indicar que o envio do formulário foi concluído
    };

    return (
        <form onSubmit={handleSubmitForm} className="FormLogin">
            <div>
                <label htmlFor="username">Usuário</label>
                <input 
                id="username" 
                type="text" 
                value={formData.username}
                onChange={handleChangeForm}
                // required 
                />
            </div>

            <div>
                <label htmlFor="password">Senha</label>
                <input 
                id="password" 
                type="password" 
                value={formData.password}
                onChange={handleChangeForm}
                // required 
                />
            </div>

            {hasError && <p className="error">{hasError}</p>}

            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Entrar'}
            </button>
        </form>
    )
}