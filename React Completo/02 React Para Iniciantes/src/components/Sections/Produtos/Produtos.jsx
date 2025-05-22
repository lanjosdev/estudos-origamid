import { Title } from "../../Title/Title"
import { Produto } from "../../Produto/Produto";

export const Produtos = () => {
  const produtos = [
    { 
      nome: 'Notebook', 
      propriedades: ['16gb ram', '512gb'] 
    },
    { 
      nome: 'Smartphone', 
      propriedades: ['2gb ram', '128gb'] 
    },
  ];


  return (
    <section>
      <Title title={'Produtos'} />

      {produtos.length > 0 ? (

        produtos.map((produto, idx) => (
          <Produto 
          key={idx+produto.nome} 
          nome={produto.nome} 
          {...produto}
          />
        ))

      ) : (

        <p>
          Sem produtos.
        </p>

      )}
    </section>
  )
}