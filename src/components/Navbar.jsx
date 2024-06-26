import { Link } from "react-router-dom"
import { useStore } from "../store"

const Navbar = () => {
  const cart = useStore(state => state.cart)

  return (
    <div className="py-2 px-5 flex items-center justify-between w-screen">
      <Link to="/menu">
        <h2 className="text-[var(--white-color)] text-xl text-left py-3">Menu</h2>
      </Link>
      <Link to="/cart">
        <button className="relative">
          {cart.length !== 0 && (
            <div className="absolute top-0 right-0 bg-teal-500 w-4 h-4 rounded-full ">
              <div className="flex items-center justify-center">
                <span className="text-xs font-semibold">{cart.length}</span>
              </div>
            </div>
          )}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </button>
      </Link>
    </div>
  )
}

export default Navbar