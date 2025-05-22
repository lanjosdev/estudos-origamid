

export const Produto = ({ nome, propriedades }) => {

  return (
    <div className="Produto" style={{ border: '1px solid', padding: '1rem', margin: '1rem 0' }}>
        <p>{nome}</p>

        <ul>
            {propriedades.map((propriedade, idx) => (
                <li key={idx}>{propriedade}</li>
            ))}
        </ul>
    </div>
  )
}