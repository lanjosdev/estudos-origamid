// Server action para redirecionar após o envio do formulário
'use server';

import { redirect } from 'next/navigation';

export async function actionRedirect(path: string) {
    // Redireciona para a rota especificada
    redirect(path);
}