import { cookies } from "next/headers"
import Link from "next/link"


export async function Header() {
    const tokenValue = cookies().get('token')?.value;
    const response = await fetch('https://api.origamid.online/conta/perfil', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + tokenValue,
        },
    });
    const data = await response.json();
    

    return (
        <header>
            <nav>
                <ul className="menu">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/produtos">Produtos</Link>
                    </li>
                    <li>
                        <Link href="/produtos/adicionar">Add Produto</Link>
                    </li>
                    <li>
                        {data?.usuario ? (
                            <Link href="/profile">{data.usuario}</Link>
                        ) : (
                            <Link href="/login">Login</Link>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    )
}