import { useContext } from "react"
import { CartContext } from "../context/cart"

export const useCart = () => {
  const { state, dispatch } = useContext(CartContext)
  return {
    cart: state,
    updateCart: dispatch,
  }
}
