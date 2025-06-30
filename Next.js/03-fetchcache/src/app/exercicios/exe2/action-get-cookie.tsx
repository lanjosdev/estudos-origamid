'use server';

import { cookies } from 'next/headers';

export async function actionGetCookie(key: string) {
    const value = cookies().get(key)?.value; // Pega o valor do cookie pelo key

    // OPCIONAL: Pode ter um retorno ou não
    return { 
        definido: true, 
        key, 
        value 
    };
}