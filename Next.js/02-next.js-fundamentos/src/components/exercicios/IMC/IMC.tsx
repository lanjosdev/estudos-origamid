'use client';
import { useState } from "react";


export function IMC() {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);


    const handleCalcularIMC = () => {
        if (altura <= 0 || peso <= 0) {
            alert("Altura e peso devem ser maiores que zero.");
            return;
        }

        setImc(peso / (altura * altura));
    };


    return (
        <div className="IMC">
            <div className="label--input">
                <label htmlFor="altura">Altura (Metros)</label>
                <input 
                type="number" 
                id="altura" step="0.1" min="0.1" 
                onChange={(e)=> setAltura(Number(e.target.value))} 
                />
            </div>

            <div className="label--input">
                <label htmlFor="peso">Peso (Kg)</label>
                <input 
                type="number" 
                id="peso" min='1' 
                onChange={(e)=> setPeso(Number(e.target.value))} 
                />
            </div>


            {imc > 0 && (
                <div className="resultado">
                    <h2>Resultado do IMC</h2>
                    <p>Seu IMC é: {imc.toFixed(2)}</p>
                </div>
            )}

            <button onClick={handleCalcularIMC}>
                Calcular IMC
            </button>
        </div>
    )
}