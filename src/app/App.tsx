import React from "react"
import { Products } from "./pages/Products"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Product } from "./templates/Product"

function App() {
  return (
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
  )
}

export default App
