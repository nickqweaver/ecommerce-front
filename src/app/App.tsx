import { Products } from './pages/Products'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Product } from './templates/Product'
import { CartContextProvider } from './context/cart'
import { Layout } from './layout/Layout'
import { Cart } from './pages/Cart'
import { CustomerContextProvider } from './context/customer'

function App() {
  return (
    <CartContextProvider>
      <CustomerContextProvider>
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
                <Cart />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </CustomerContextProvider>
    </CartContextProvider>
  )
}

export default App
