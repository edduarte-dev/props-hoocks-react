interface HomeProps {
  titulo: string
  texto: string
}

function Home({ titulo, texto }: HomeProps) {
  return (
    <section>
      <h1>{titulo}</h1>
      <p>{texto}</p>
    </section>
  )
}

export default Home
