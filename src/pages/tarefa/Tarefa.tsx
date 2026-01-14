import { useState } from 'react'

function Tarefa() {
  const [tarefa, setTarefa] = useState('')
  const [lista, setLista] = useState<string[]>([])

  function adicionarTarefa() {
    if (tarefa.trim() === '') return

    setLista([...lista, tarefa])
    setTarefa('')
  }

  return (
    <section>
      <h2>Lista de Tarefas</h2>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />

      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default Tarefa
