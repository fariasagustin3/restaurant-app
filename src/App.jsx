import { Link } from "react-router-dom"

function App() {
  return (
    <div className="w-screen h-screen" style={{ backgroundImage: "url('/assets/image-background.png')", backgroundSize: "cover" }}>
      <div className="w-screen h-screen flex flex-col bg-[var(--bg-black)] items-center justify-center gap-3 px-5">
        <h1 className="text-[var(--white-color)] text-center">¡Bienvenido!</h1>
        <p className="text-[var(--white-color)] text-center">Bienvenido al menu del restaurante. Presiona el botón debajo para continuar</p>
        <Link to="/menu">
          <button className="bg-[var(--white-color)] px-10 py-2 text-[var(--black-color)] rounded-full text-sm font-medium">
            ¡Vamos!
          </button>
        </Link>
      </div>
    </div>
  )
}

export default App
