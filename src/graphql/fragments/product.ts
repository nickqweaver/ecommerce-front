import { gql } from "@apollo/client";
import { CategoryFragment } from "./category";

export const ProductTileFragment = gql`
  fragment ProductTileFragment on ProductType {
    name
    price
    thumbnail
    id
  }
`;

export const ProductFragment = gql`
  fragment ProductFragment on ProductType {
    id
    name
    price
    description
    weight
    image
    thumbnail
    createdDate
    category {
      ...CategoryFragment
    }
    stock
    productOptions {
      options
      optionCategory
    }
  }
  ${CategoryFragment}
`;
