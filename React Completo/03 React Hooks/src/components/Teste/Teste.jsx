import { useState } from "react";


export const Teste = () => {
    const valor = ['Seila']
    const [nome, setNome] = useState(Array.isArray(valor) ? 'Array' : 'String');


    return (
        <div>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}  />

            <p>Result: {nome}</p>
        </div>
    )
}