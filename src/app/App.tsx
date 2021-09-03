import React from "react";
import {
  ProductType,
  useGetAllProductTilesQuery,
} from "../graphql/generated/types";
import { Products } from "./templates/Products";

function App() {
  const { data, loading: isLoading, error } = useGetAllProductTilesQuery({
    variables: { offset: 0, limit: 10 },
  });
  console.log(data);

  return <div>Getr em</div>;
}

export default App;
