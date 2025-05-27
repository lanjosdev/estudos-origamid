// Hooks / Libs:
import { useState, useEffect } from "react";

// Context:
import { GlobalContext } from "./GlobalContext";

// Provedor:
export const GlobalProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [dados, setDados] = useState(null);


    useEffect(()=> {
        async function getData() {
            setLoading(true);

            try {
                const response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
                const resJson = await response.json();
                // console.log(resJson);
                setDados(resJson);
            }
            catch(error) {
                console.error('DETALHES DO ERRO:', error);
            }

            setLoading(false);                 
        }
        getData();
    }, []);



    function clearData() {
        setDados(null);
    }

    return (
        <GlobalContext.Provider 
        value={{
            loading,
            dados,
            clearData
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}