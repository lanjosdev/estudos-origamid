import { cookies } from 'next/headers';

export async function GET() {
    const tokenValue = cookies().get('token')?.value;
    const response = await fetch('https://api.origamid.online/conta/perfil', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + tokenValue,
        },
    });
    // const data = response.ok ? await response.json() : null;
    const data = await response.json();

    return Response.json(data);
}