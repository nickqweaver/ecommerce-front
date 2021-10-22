import React from "react"
import { Products } from "./pages/Products"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Product } from "./templates/Product"
import { CartContext, CartContextProvider } from "./context/cart"

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Switch>
          <Route path="/products/:slug">
            <Product />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </Router>
    </CartContextProvider>
  )
}

export default App
