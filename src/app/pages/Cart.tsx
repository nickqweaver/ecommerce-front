import React from "react"
import { CartItem } from "../components/Cart/CartItem"
import { Page } from "../components/UI/Page"
import { useCart } from "../hooks/useCart"

export const Cart = () => {
  const { cart } = useCart()

  return (
    <Page>
      {cart.items.map((item) => {
        if (
          item.productId &&
          item.variantId &&
          item.quantity &&
          item.quantity > 0
        ) {
          return (
            <CartItem
              quantity={item.quantity}
              variantId={item.variantId}
              productId={item.productId}
            />
          )
        }
        return <></>
      })}
      <p>Total: ${cart.total}</p>
    </Page>
  )
}
