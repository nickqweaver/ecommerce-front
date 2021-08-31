import { gql } from "@apollo/client";
import { ProductFragment } from "../fragments/product";

export const GET_ALL_PRODUCT = gql`
  query getAllProducts {
    getAllProducts {
      ...ProductFragment
    }
  }
  ${ProductFragment}
`;
