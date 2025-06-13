import Link from "next/link";

// API:
import { GET_CURSO_AULA } from "@/app/api/cursosApi";

// Styles:
// import "./style.css";


type PageParams = {
    params: {
        curso: string;
        aula: string;
    };
};

export default async function AulaPage({ params }: PageParams) {
    // console.log('params', params);
    const aula = await GET_CURSO_AULA(params.curso, params.aula);
    // console.log('aula:', aula);

    return (
        <main className="AulaPage">
            <p>
                <span>Curso:</span> <Link href={`/cursos/${params.curso}`}>{params.curso}</Link>
            </p>
            <h1>
                Aula: {aula.nome}
            </h1>
            
            <p>Descrição: {aula.descricao}</p>
            <p>Duração: {aula.tempo}h</p>
        </main>
    );
}