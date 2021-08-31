import React from "react";
import {
  ProductType,
  useGetAllProductsQuery,
} from "../graphql/generated/types";
import { Products } from "./templates/Products";

function App() {
  const { data, loading: isLoading, error } = useGetAllProductsQuery();
  const products = data?.getAllProducts;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (products && products !== null) {
    return <Products products={products as ProductType[]} />;
  } else {
    return <div>No products found</div>;
  }
}

export default App;
