import { useState } from "react"
import Navbar from "../components/Navbar"
import { useStore } from "../store"
import Swal from 'sweetalert2'

const CartPage = () => {
  const cart = useStore(state => state.cart)
  const deleteProductFromCart = useStore(state => state.deleteProductFromCart);
  const resetCart = useStore(state => state.resetCart);
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    
    Swal.fire({
      title: "Genial!",
      text: "Su orden está en camino, por favor espere 😊",
      icon: "success"
    });

    setInput("")
    resetCart()
  }

  return (
    <div className="w-screen h-screen overflow-x-hidden" style={{ backgroundImage: "url('/assets/image-background.png')", backgroundSize: "cover" }}>
      <div className="bg-[var(--bg-black)] w-full h-full">
        <Navbar />
        <div className="w-screen px-5 py-5 gap-5 flex flex-col">
          {cart?.map(product => (
            <div className="flex items-center justify-between gap-5" key={product.id}>
              <img src={product.image} alt="" className="w-16 rounded-md" />
              <span className="text-[var(--white-color)]">{product.name}</span>
              <span className="text-[var(--white-color)]">${product.price}</span>
              <button onClick={() => deleteProductFromCart(product.id)} className="text-[var(--white-color)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="w-full px-5 gap-5 flex flex-col items-center bg-[var(--white-color)] py-5 mt-10">
          <div className="w-full flex items-center justify-between">
            <span className="text-2xl font-bold">TOTAL:</span>
            <span className="text-2xl font-bold">${cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)}</span>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            <label className="font-semibold">Especificaciones:</label>
            <textarea
              required
              className="w-full border-[1px] border-[#c0c0c0] focus:outline-none p-5"
              placeholder="Que la salsa de la pizza margarita no tenga cebolla, por favor."
              name=""
              value={input}
              onChange={(e) => setInput(e.target.value)}
              id="" 
              rows={8}
            ></textarea>
            <button disabled={!cart.length} type="submit" className="bg-[var(--black-color)] text-[var(--white-color)] py-4 font-semibold">PAGAR</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CartPage