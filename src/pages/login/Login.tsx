import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert(`Email: ${email}`)
  }

  return (
    <section>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </section>
  )
}

export default Login
