// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto

// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

// Components:
import AppRoutes from "../routes/AppRoutes"


export const Desafio = () => {

  return (
    <div className="Desafio grid">
        <AppRoutes />
    </div>
  )
}