import React from "react"
import { ProductType } from "../../graphql/generated/types"
import { ProductCard } from "../components/ProductCard"

interface ProductsProps {
  products: ProductType[]
}
export function Products(props: ProductsProps) {
  const { products } = props
  console.log(products)
  return (
    <div>
      {products.map((product) => (
        <ProductCard {...product} />
      ))}
    </div>
  )
}
