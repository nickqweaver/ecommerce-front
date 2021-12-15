import React, { useReducer } from "react"
import { OrderItemInput } from "src/graphql/generated/types"

export type CartItem = {
  unitPrice: number
} & OrderItemInput

type Cart = {
  items: CartItem[]
  quantity: number
  total: number
}

const initialState = {
  items: [],
  quantity: 0,
  total: 0.0,
}

type Actions =
  | {
      type: "ADD_CART_ITEM"
      payload: { item: CartItem }
    }
  | { type: "DELETE_CART_ITEM"; payload: { productCode: string } }
  | { type: "CLEAR_CART" }

export const CartContext = React.createContext<{
  state: Cart
  dispatch: (action: Actions) => void
}>({
  state: initialState,
  dispatch: () => {},
})

const getUpdatedTotalPrice = (items: CartItem[]): number => {
  return items.reduce<number>(
    (previousValue, currentValue) =>
      previousValue + currentValue.unitPrice * (currentValue.quantity ?? 0),
    0
  )
}

const mergeSameItems = (items: CartItem[], newItem: CartItem): CartItem[] => {
  const matchedIndex = items.findIndex(
    (item) => item.variantId === newItem.variantId
  )
  if (matchedIndex >= 0) {
    return items.map((item, index) =>
      index === matchedIndex && newItem.quantity
        ? { ...item, quantity: (item.quantity ?? 0) + newItem.quantity }
        : item
    )
  }
  return [...items, newItem]
}

function reducer(state: Cart, action: Actions) {
  switch (action.type) {
    case "ADD_CART_ITEM":
      const addCartItems = mergeSameItems([...state.items], action.payload.item)
      return {
        ...state,
        items: addCartItems,
        total: getUpdatedTotalPrice(addCartItems),
        quantity: state.quantity + (action.payload.item?.quantity ?? 0),
      }
    case "DELETE_CART_ITEM":
      const deleteCartItems = [...state.items].filter(
        (item) => item.variantId !== action.payload.productCode
      )
      return {
        ...state,
        items: deleteCartItems,
        total: getUpdatedTotalPrice(deleteCartItems),
        quantity: deleteCartItems.reduce<number>(
          (accumulator, currentItem) =>
            accumulator + (currentItem.quantity ?? 0),
          0
        ),
      }
    case "CLEAR_CART":
      return {
        ...initialState,
      }
  }
}

export const CartContextProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
