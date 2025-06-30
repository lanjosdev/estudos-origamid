'use client';
import { useState } from "react";
import { actionLogin } from "@/app/exercicios/exe2/action-login"; // Importar a action de login


export function FormLogin() {
    const [isLoading, setIsLoading] = useState(false); // Estado para indicar se o formulário está sendo enviado
    const [hasError, setHasError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });



    // Função para lidar com mudanças nos campos do formulário
    const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHasError(null); // Limpar mensagem de erro ao digitar
        setSuccess(null);

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
        setIsLoading(true);
        setHasError(null);
        setSuccess(null);
        
        // Utilizar a action @action-login.tsx para enviar os dados do formulário
        const response = await actionLogin(formData.username, formData.password);
        console.log(response);

        // Verificar se a resposta contém um erro
        if(response.error || !response.success) {
            setHasError(response.message || 'Erro ao fazer login.'); // Exibir mensagem de erro
            setIsLoading(false);
            return;
        }

        // Se o login for bem-sucedido, você pode redirecionar o usuário ou exibir uma mensagem de sucesso
        console.log('Login bem-sucedido:', response.message);   
        setSuccess(response.message);
        setFormData({ username: '', password: '' }); // Limpar os campos do formulário
        

        setIsLoading(false);
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
            {success && <p style={{color: 'green'}}>{success}</p>}


            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Entrar'}
            </button>
        </form>
    )
}