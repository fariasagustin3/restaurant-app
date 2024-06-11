import { useEffect, useState } from 'react'
import { categories, productos } from '../data'

const MenuPage = () => {
  const [categorySelected, setCategorySelected] = useState("todos");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categorySelected === "todos") {
      setProducts(productos)
    } else {
      setProducts(productos.filter(product => product.category === categorySelected))
    }
  }, [categorySelected])

  return (
    <div className="w-screen h-full" style={{ backgroundImage: "url('/assets/image-background.png')", backgroundSize: "contain" }}>
      <div className='bg-[var(--bg-black)]'>
        <h2 className="text-[var(--white-color)] text-xl text-center py-3">Menu</h2>

        {/* seccion en donde el usuario selecciona la categoria */}
        <div className="flex items-center gap-7 overflow-x-auto py-5 px-5">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setCategorySelected(category.value)}
              className={categorySelected === category.value ? 'bg-transparent text-md text-[var(--wine-color)] font-semibold' : 'bg-transparent text-md text-[var(--white-color)] font-semibold'}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* seccion en donde el usuario puede ver los productos filtrados */}
        <div className='flex flex-wrap items-center justify-center gap-5 py-10'>
          {/* product item */}
          {products?.map(product => (
            <div className='w-32 h-40 bg-white rounded-md' key={product.id}>
              <img src={product.image} alt="" className='w-full h-[60%] object-cover rounded-t-md' />
              <div className='px-2 flex flex-col justify-between h-[40%] py-1'>
                <p className='text-sm leading-4 font-semibold'>{product.name}</p>
                <div className='flex items-center justify-between'>
                  <p className='text-xs leading-4 font-semibold'>${product.price}</p>
                  <p className='text-xs leading-4 font-semibold text-[var(--wine-color)]'>{product.duration}min</p>
                </div>
              </div>
            </div>
          ))}
          {/* <div className='w-32 h-40 bg-white'>
          <img src="/images/pizzas/pizza-bbq.jpg" alt="" className='w-full h-[60%] object-cover rounded-t-md' />
          <div className='px-2 flex flex-col justify-between h-[40%] py-1'>
            <p className='text-sm leading-4 font-semibold'>Pizza Barbacoa Con 4 Quesos</p>
            <div className='flex items-center justify-between'>
              <p className='text-xs leading-4 font-semibold'>$2.50</p>
              <p className='text-xs leading-4 font-semibold text-[var(--wine-color)]'>30min</p>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default MenuPage