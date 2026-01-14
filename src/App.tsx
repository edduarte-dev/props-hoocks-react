import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Tarefa from './pages/tarefa/Tarefa'

function App() {
  return (
    <main className="app">
      <Home 
        titulo="Componente Home" 
        texto="Dragon Ball é melhor do que Naruto!" 
      />

      <Contador />
      <Tarefa />
      <Login />
    </main>
  )
}

export default App
