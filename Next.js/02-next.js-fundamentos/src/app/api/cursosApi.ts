// api/cursos.ts
type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

type Aula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

export async function GET_ALL_CURSOS() {
    const response = await fetch('https://api.origamid.online/cursos');
    // console.log('GET', response);
    
    return (await response.json()) as Curso[];
}

export async function GET_CURSO(curso: string) {
    const response = await fetch(`https://api.origamid.online/cursos/${curso}`);
    // console.log('GET', response);
    
    return (await response.json()) as Curso & {
        aulas: Aula[];
    }
}

export async function GET_CURSO_AULA(curso: string, aula: string) {
    const response = await fetch(`https://api.origamid.online/cursos/${curso}/${aula}`);
    // console.log('GET', response);
    
    return (await response.json()) as Aula;
}