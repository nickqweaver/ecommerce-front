import React from "react"
import {
  ProductType,
  useGetAllProductTilesQuery,
} from "../graphql/generated/types"
import { Products } from "./templates/Products"

function App() {
  const {
    data,
    loading: isLoading,
    error,
  } = useGetAllProductTilesQuery({
    variables: { offset: 0, limit: 10 },
  })

  if (data?.getAllPaginatedProducts?.results)
    return (
      <Products
        products={data?.getAllPaginatedProducts?.results as ProductType[]}
      />
    )
  else return <div>No Products</div>
}

export default App
