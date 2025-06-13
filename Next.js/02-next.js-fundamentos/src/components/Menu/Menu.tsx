import Link from "next/link";


export default function Menu() {

    return (
        <header className="Menu">
            <ul className="menu">
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/sobre'>Sobre</Link>
                </li>
                <li>
                    <Link href='/imc'>IMC</Link>
                </li>
                <li>
                    <Link href='/cursos'>Cursos</Link>
                </li>
                <li>
                    <Link href='/produtos'>Produtos</Link>
                </li>
            </ul>
        </header>
    )
}