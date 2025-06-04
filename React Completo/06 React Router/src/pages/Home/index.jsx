// Hooks / Libs:
import { useState, useEffect } from "react";

// Components:
import { CardProduct } from "../../components/CardProduct/CardProduct";

// Style:
import './style.css';


const Home = () => {
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(null);

    const [products, setProducts] = useState(null);


    useEffect(()=> {
        async function getProductsApi() {
            setLoading(true);
            setHasError(null);

            try {
                const response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
                const resJson = await response.json();
                // console.log(resJson)

                if(Array.isArray(resJson)) {
                    setProducts(resJson);
                }
                else {
                    console.warn('Não é uma lista');
                    setHasError('Ops, falha na requisição');
                }
            }
            catch(error) {
                console.error('DETALHES DO ERRO', error);
                setHasError('Ops, houve um erro');
            }

            setLoading(false);
        }
        getProductsApi();
    }, []);



    return (
        <main className="Home">
            {loading ? (
                <p>Carregando...</p>
            ) : (
                hasError !== null ? (
                    <p className="has_error">{hasError}</p>
                ) : (
                    <div className="products">
                        {products.map(({id, fotos, nome}) => (
                            <CardProduct 
                            key={id}
                            id={id} 
                            fotoSrc={fotos[0].src} 
                            nome={nome}  
                            />
                        ))}
                    </div>
                )
            )}
        </main>
    )
}
export default Home;