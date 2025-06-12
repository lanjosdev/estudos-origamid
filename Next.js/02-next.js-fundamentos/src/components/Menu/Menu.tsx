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
            </ul>
        </header>
    )
}