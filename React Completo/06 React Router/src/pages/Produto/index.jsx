// Hooks / Libs:
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components:
import { ProductPhotos } from "../../components/ProductPhotos/ProductPhotos";
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";

// Style:
import './style.css';


const Produto = () => {
    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(null);

    const [product, setProduct] = useState(null);
    


    useEffect(()=> {
        async function getProductApi() {
            setLoading(true);
            setHasError(null);

            if(!params?.id) {
                setHasError('Parametro ausente');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`);
                const resJson = await response.json();
                // console.log(resJson)

                if(resJson?.nome) {
                    setProduct(resJson);
                }
                else {
                    console.warn('FALHA NA REQ');
                    setHasError('Ops, falha na requisição');
                }
            }
            catch(error) {
                console.error('DETALHES DO ERRO', error);
                setHasError('Ops, houve um erro');
            }

            setLoading(false);
        }
        getProductApi();
    }, [params]);



    return (
        <main className="Produto">
            {loading ? (
                <p>Carregando...</p>
            ) : (
                hasError !== null ? (
                    <p className="has_error">{hasError}</p>
                ) : (
                    <div className="product">
                       <ProductPhotos photos={product.fotos} />

                       <ProductDetails 
                       title={product.nome} 
                       price={product.preco}  
                       description={product.descricao}
                       />
                    </div>
                )
            )}
        </main>
    )
}
export default Produto;