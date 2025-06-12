'use client'
import { useState, useEffect } from "react";


export function GetWidth() {
    const [width, setWidth] = useState(0); 
    const [active, setActive] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        handleResize(); // Define a largura inicial


        // Adiciona o listener para o evento de resize
        window.addEventListener('resize', handleResize);
        // Limpa o listener quando o componente é desmontado
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <div className="GetWidth">
            <h3>Largura da aplicação: {width}</h3>

            <button onClick={() => setActive((prev) => !prev)}>
                {active ? 'Ativo' : 'Inativo'}
            </button>
        </div>
    )
}