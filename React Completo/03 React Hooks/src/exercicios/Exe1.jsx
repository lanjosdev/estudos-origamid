// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
import { useState } from "react";

// Componentes:
import { Button } from "../components/Button/Button";
import { Produto } from "../components/Produto/Produto";


export const Exe1 = () => {
    const [loading, setLoading] = useState(false);
    const defaultLoadingBtns = {
        notebook: false,
        smartphone: false,
        tablet: false
    };
    const [loadingBtns, setLoadingBtns] = useState(defaultLoadingBtns);

    const [produtoData, setProdutoData] = useState(null);
    


    async function handleGetDataProduct(e) {
        const targetElementText = e.target.innerText;
        if(targetElementText) {
            setLoading(true);
            setLoadingBtns(prev => ({...prev, [targetElementText]: true}));

            try {
                const response = await fetch(
                    `https://ranekapi.origamid.dev/json/api/produto/${targetElementText}`
                );
                const resJson = await response.json();
                console.log(resJson);

                setProdutoData(resJson);
            }
            catch(error) {
                console.log('DETALHES DO ERRO:', error);
            }

            setLoading(false);
            setLoadingBtns(prev => ({...prev, [targetElementText]: false}));
        }
    }

    return (
        <div className="Exe1">
            <div className="container_btn">
                {Object.keys(loadingBtns)
                .map((key, idx) => (
                    <Button 
                    key={idx+key} 
                    onClick={handleGetDataProduct} 
                    disabled={loadingBtns[key] || produtoData?.id == key} 
                    >
                        {key}
                    </Button>
                ))}
            </div>

            <div className="result">
                {loading ? (
                    <p>Carregando...</p>
                ) : (
                    produtoData && <Produto dados={produtoData} />
                )}
            </div>
        </div>
    )
}