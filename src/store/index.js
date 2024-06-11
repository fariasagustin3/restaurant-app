import { create } from 'zustand'

export const useStore = create((set) => ({
  // initial state
  cart: [],

  // methods
  addProductToCart: (product) => set(state => ({
    ...state,
    cart: [...state.cart, product]
  }))
}))