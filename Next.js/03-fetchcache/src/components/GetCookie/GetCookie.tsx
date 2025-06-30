'use client';
import { useState } from "react";
import { actionGetCookie } from "@/app/exercicios/exe2/action-get-cookie";

export default function GetCookie() {
    const [valueCookie, setValueCookie] = useState<string | null>(null);


    async function handleGetCookie() {
        const response = await actionGetCookie('token'); // Chama a action para pegar o cookie
        console.log(response);
        
        if(response && response.value) {
            setValueCookie(response.value); // Atualiza o estado com o valor do cookie
        } else {
            setValueCookie('Cookie não encontrado');
        }
    }


    return (
        <div>
            <p style={{wordBreak: 'break-all'}}>
                <b>Cookie:</b> {valueCookie}
            </p>
            
            <button type="button" onClick={handleGetCookie}>
                Pegar value do cookie
            </button>
        </div>
    )
}