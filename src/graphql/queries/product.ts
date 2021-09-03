import { gql } from "@apollo/client";
import { ProductTileFragment } from "../fragments/product";

export const GET_ALL_PRODUCT_TILES = gql`
  query getAllProductTiles($offset: Int!, $limit: Int!) {
    getAllPaginatedProducts(offset: $offset, limit: $limit) {
      hasMore
      results {
        ...ProductTileFragment
      }
    }
  }
  ${ProductTileFragment}
`;
