import { gql } from "@apollo/client"
import { Product, ProductTile } from "../fragments/product"

export const GET_ALL_PRODUCT_TILES = gql`
  query getAllProductTiles($offset: Int!, $limit: Int!) {
    getAllPaginatedProducts(offset: $offset, limit: $limit) {
      hasMore
      results {
        ...ProductTile
      }
    }
  }
  ${ProductTile}
`

export const GET_PRODUCT_BY_SLUG = gql`
  query getProductBySlug($slug: String!) {
    getProductBySlug(slug: $slug) {
      ...Product
    }
  }
  ${Product}
`
