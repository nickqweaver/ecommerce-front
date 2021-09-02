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
        <div />
      ))}
    </div>
  );
}
