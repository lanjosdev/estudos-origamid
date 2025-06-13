import Link from "next/link";

// API:
import { GET_CURSO } from "@/app/api/cursosApi";

// Styles:
// import "./style.css";


type PageParams = {
    params: {
        curso: string;
    };
};

export default async function CursoPage({ params }: PageParams) {
    // console.log('parametros', params);
    const curso = await GET_CURSO(params.curso);
    // console.log('curso:', curso);

    return (
        <main className="CursoPage">
            <h1>{curso.nome}</h1>
            
            <p>Descrição: {curso.descricao}</p>
            <p>Duração: {curso.total_horas}h</p>
            <br />

            <h2>Aulas</h2>
            <p>Total de aulas: <b>{curso.total_aulas}</b></p>
            <ul>
                {curso.aulas.map((aula) => (
                    <li key={aula.id}>
                        <Link href={`/cursos/${curso.slug}/${aula.slug}`}>
                            {aula.ordem} - {aula.nome} ({aula.tempo} min)
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}