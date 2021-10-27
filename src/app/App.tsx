import React from "react"
import { Products } from "./pages/Products"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Product } from "./templates/Product"
import { CartContext, CartContextProvider } from "./context/cart"
import { Layout } from "./layout/Layout"

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Layout>
          <Switch>
            <Route path="/products/:slug">
              <Product />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/cart">
              <div>Welcome to cart</div>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </CartContextProvider>
  )
}

export default App
