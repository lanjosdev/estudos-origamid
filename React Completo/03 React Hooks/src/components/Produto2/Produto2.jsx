import { useState, useEffect } from "react";

import { Title } from "../Title/Title";



function precoFormatado(valor) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}


export const Produto2 = ({ produto }) => {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  const [dataProduct, setDataProduct] = useState(null);


  useEffect(()=> {
    async function getDataProduct() {
      setLoading(true);
      setHasError(null);
      setDataProduct(null);

      if(produto != null) {
        try {
          const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);
          const resJson = await response.json();
          // console.log(resJson);

          if(resJson?.nome) {
            // console.log('SUCESSO');
            setDataProduct(resJson);
          }
          else {
            console.warn('FALHA NA REQ');
            setHasError('Ops, falha na requisição');
          }
        }
        catch(error) {
          console.error('DETALHES DO ERRO:', error);
          setHasError('Ops, houve um erro');
        }
      }
      else {
        setHasError('Erro de props');
      }

      setLoading(false);
    }
    getDataProduct();
  }, [produto]);



  return (
    <div className="Produto2">
      {loading ? (

        <p>Carregando...</p>

      ) : (

        dataProduct == null ? (
          <p>Sem dados do produto</p>
        ) : (
          <>
          <Title title={dataProduct?.nome} />

          <p className="price">
            {precoFormatado(dataProduct?.preco)}
          </p>
          </>
        )

      )}

      {hasError && (
        <p style={{color: 'red'}}>! {hasError} !</p>
      )}
    </div>
  )
}