import Navbar from "../components/Navbar"
import { useStore } from "../store"

const CartPage = () => {
  const cart = useStore(state => state.cart)

  return (
    <div className="w-screen h-screen" style={{ backgroundImage: "url('/assets/image-background.png')", backgroundSize: "cover" }}>
      <div className="bg-[var(--bg-black)] w-full h-full">
        <Navbar />
        <div className="w-screen px-5 py-5 gap-5 flex flex-col">
          {cart?.map(product => (
            <div className="flex items-center justify-between gap-5" key={product.id}>
              <img src={product.image} alt="" className="w-16 rounded-md" />
              <span className="text-[var(--white-color)]">{product.name}</span>
              <span className="text-[var(--white-color)]">${product.price}</span>
              <span className="text-[var(--white-color)]">{product.category}</span>
            </div>
          ))}
        </div>

        <div className="w-full bg-[var(--white-color)] py-5 mt-10">
          <div className="px-5 flex items-center justify-between">
            <span className="text-2xl font-bold">TOTAL:</span>
            <span className="text-2xl font-bold">${cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage