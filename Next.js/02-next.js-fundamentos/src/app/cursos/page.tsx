import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Origamid | Cursos",
    description: "Criado no curso da Origamid",
};

// API:
import { GET_ALL_CURSOS } from "../api/cursosApi";

// Styles:
import "./style.css";


export default async function CursosPage() {
    const cursos = await GET_ALL_CURSOS();
    // console.log('dados:', cursos);

    return (
        <main className="CursosPage">
            <h1>Cursos</h1>

            <ul className="cursos">
                {cursos.map((curso) => (
                    <li key={curso.id} className="item_curso">
                        <Link href={`/cursos/${curso.slug}`}>
                            <h3>{curso.nome}</h3>
                            <p>Descrição: {curso.descricao}</p>
                            <p>Total de aulas: {curso.total_aulas} - {curso.total_horas} horas</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}