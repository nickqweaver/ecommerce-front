import React from "react"
import { useGetAllProductTilesQuery } from "../../graphql/generated/types"
import { ProductCard } from "../components/ProductCard"

interface ProductsProps {}

export function Products(props: ProductsProps) {
  const {
    data,
    loading: isLoading,
    error,
  } = useGetAllProductTilesQuery({
    variables: { offset: 0, limit: 1 },
    errorPolicy: "all", // TODO change this after index issue is fixed, error getting thrown but data still accessible
  })
  const products = data?.getAllPaginatedProducts?.results
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>An error occured</div>
  }
  if (typeof products === "undefined" || products === null) {
    return <div>There are no products</div>
  }
  // TODO query product ID's pass the ID's into the cards and then query the card data?
  return (
    <div>
      {products.map((product) => (
        <ProductCard {...product} />
      ))}
    </div>
  )
}
