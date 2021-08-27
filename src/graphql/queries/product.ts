import { gql } from "@apollo/client";
import { ProductFragment } from "../fragments/product";

export const GET_ALL_PRODUCT_QUERY = gql`
  query getAllProductsQuery {
    getAllProducts {
      ...ProductFragment
    }
  }
  ${ProductFragment}
`;
