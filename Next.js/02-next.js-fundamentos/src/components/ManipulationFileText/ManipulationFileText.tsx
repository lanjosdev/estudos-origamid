// Server Component (Padrao no Next e possui acesso as APIs do Node.js/Next.js)
import fs from 'fs/promises';

export default async function ManipulationFileText() {
    await fs.appendFile('text.txt', 'Texto adicionado ao arquivo.\n', 'utf8');
    const data = await fs.readFile('text.txt', 'utf8');

    return (
        <div className='ManipulationFileText'>{data}</div>
    )
}