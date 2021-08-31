import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCT_QUERY } from "../graphql/queries/product";

function App() {
  const { data, loading: isLoading, error } = useQuery(GET_ALL_PRODUCT_QUERY);
  console.log(data);
  return <div className="App"></div>;
}

export default App;
