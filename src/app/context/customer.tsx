import React, { useReducer } from 'react'
import { CustomerType } from 'src/graphql/generated/types'

type ContextCustomerType = {
  token: string | null
} & CustomerType

const initialState: ContextCustomerType = {
  id: '',
  firstName: '',
  lastName: '',
  lastLogin: '',
  username: '',
  dateJoined: '',
  email: '',
  token: null,
}

type Actions =
  | {
      type: 'LOGIN'
      payload: { token: string; customer: CustomerType }
    }
  | { type: 'LOGOUT' }

export const CustomerContext = React.createContext<{
  state: CustomerType
  dispatch: (action: Actions) => void
}>({
  state: initialState,
  dispatch: () => {},
})

function reducer(state: CustomerType, action: Actions) {
  switch (action.type) {
    case 'LOGIN':
      sessionStorage.setItem('token', action.payload.token)
      return {
        ...state,
        ...action.payload.customer,
        token: action.payload.token,
      }
    case 'LOGOUT':
      sessionStorage.removeItem('token')
      return {
        ...state,
        token: null,
      }
  }
}

export const CustomerContextProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CustomerContext.Provider value={{ state, dispatch }}>
      {children}
    </CustomerContext.Provider>
  )
}
