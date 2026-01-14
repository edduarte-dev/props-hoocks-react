import { useState } from 'react'

function Contador() {
  const [contador, setContador] = useState(0)

  function incrementar() {
    setContador(contador + 1)
  }

  return (
    <section className="contador">
      <h2>Contador</h2>
      <p>Valor atual: <span>{contador}</span></p>
      <button onClick={incrementar}>Incrementar</button>
    </section>
  )
}

export default Contador
