// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

// Hooks / Libs:
// import { useState, useContext } from "react";

// Context:
import { GlobalProvider } from "../context/global/GlobalProvider";

// Components:
import { Produto3 } from "../components/Produto3/Produto3";


export const Exe3 = () => {
    

    return (
        <GlobalProvider>

            <div className="Exe3">
                <Produto3 />
            </div>

        </GlobalProvider>
    )
}