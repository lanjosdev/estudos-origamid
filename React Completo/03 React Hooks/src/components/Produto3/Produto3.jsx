// Hooks / Libs:
import { useContext } from "react";

// Context:
import { GlobalContext } from "../../context/global/GlobalContext";

// Components:
import { ButtonClear } from "../ButtonClear/ButtonClear";


export const Produto3 = () => {
  const { loading, dados } = useContext(GlobalContext);
  

  return (
    <div className="Produto3">
      {loading ? (

        <p>Carregando...</p>

      ) : (

        dados == null ? (
          <p>Sem dados dos produtos</p>
        ) : (
          <>
          <p>Produto:</p>

          {dados.map((produto) => (
            <li key={produto.id}>
              {produto.nome}
            </li>
          ))}

          <ButtonClear />
          </>
        )

      )}
    </div>
  )
}