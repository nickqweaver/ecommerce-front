import { gql } from "@apollo/client";

export const CategoryFragment = gql`
  fragment CategoryFragment on CategoryType {
    id
    name
    description
    thumbnail
  }
`;
/**
  * {
  * Fragment for tile below
  getProductsFromCategory(categoryName: "wheels") {
    ... on WheelProductType {
      brand
      lowestVariantPrice
      hasDifferentVariantPricing
      id
      name
    }
  }
}
  */
