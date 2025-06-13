type PageParams = {
    params: {
        slugs: string[];
    };
};

export default function CursoPage({ params }: PageParams) {
    console.log('parametros', params);

    return (
        <main className="CursoPage">
            <h1>Slugs</h1>
            
            <p>
                Slugs: <b>{params.slugs.join("/")}</b> (considera a partir da rota <b>/cursos</b>)
            </p>
        </main>
    );
}