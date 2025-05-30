// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import { useState } from "react";

// Componentes:
import { Button } from "../components/Button/Button";
import { Produto2 } from "../components/Produto2/Produto2";


export const Exe2 = () => {
    const [produto, setProduto] = useState(() => {
        const preferenceLocalStorage = window.localStorage.getItem('produto') || null;
        return preferenceLocalStorage;
    });

    
    // useEffect(()=> {
    //     function checkDataLocalStorage() {
    //         const preferenceLocalStorage = window.localStorage.getItem('produto') || null;
    //         if(preferenceLocalStorage != null) {
    //             setProduto(preferenceLocalStorage);
    //         }
    //     }
    //     checkDataLocalStorage();
    // }, []);


    function handleSetProduto(e) {
        const targetText = e.target.innerText;

        if(targetText != produto) {
            setProduto(targetText);
            window.localStorage.setItem('produto', targetText);
        }
    }

    return (
        <div className="Exe2">
            <h1>
                Preferência: {produto}
            </h1>

            <div className="container_btn">
                <Button onClick={handleSetProduto}>
                    notebook
                </Button>
                
                <Button onClick={handleSetProduto}>
                    smartphone
                </Button>
            </div>

            <div className="result">
                {produto && (
                    <Produto2 produto={produto} />
                )}
            </div>
        </div>
    )
}