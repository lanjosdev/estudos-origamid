import { Title } from "../Title/Title";



function precoFormatado(valor) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}


export const Produto = ({ dados }) => {

  return (
    <div className="Produto">
      <Title title={dados.nome} />

      <p className="price">
        {precoFormatado(dados.preco)}
      </p>

      <div className="photo">
        <img src={dados.fotos[0].src} alt={dados.fotos[0].descricao} />
      </div>
      {/* <div className="photos">
        {dados.fotos.map((foto) => (
          <img src={foto.src} alt={foto.descricao} />
        ))}
      </div> */}

      <p className="description">
        <b>Descrição: </b>
        {dados.descricao}
      </p>
    </div>
  )
}