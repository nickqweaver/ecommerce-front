import React, { useReducer } from "react"
import { OrderItemInput } from "src/graphql/generated/types"

type CartItem = {
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

type ActionType = {
  type: "ADD_CART_ITEM"
  payload: { item: CartItem }
}

export const CartContext = React.createContext<{
  state: Cart
  dispatch: (action: ActionType) => void
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
    (item) => item.productCode === newItem.productCode
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

function reducer(state: Cart, action: ActionType) {
  switch (action.type) {
    case "ADD_CART_ITEM":
      const newItems = mergeSameItems([...state.items], action.payload.item)
      return {
        ...state,
        items: newItems,
        total: getUpdatedTotalPrice(newItems),
        quantity: state.quantity + (action.payload.item?.quantity ?? 0),
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