import React from "react";
import { ProductType } from "../../graphql/generated/types";
import { ProductCard } from "../components/ProductCard";

interface ProductsProps {
  products: ProductType[];
}
export function Products(props: ProductsProps) {
  const { products } = props;
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          image={product.image}
          title={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}
