import { gql } from "@apollo/client";
import { WheelVariantFragment, TireVariantFragment } from "./variants";
import { CategoryFragment } from "./category";

export const ProductFragment = gql`
  fragment ProductFragment on ProductType {
    name
    id
    image
    description
    category {
      ...CategoryFragment
    }
    createdDate
    slug
    weight
    variants {
      ...WheelVariantFragment
      ...TireVariantFragment
    }
    brand
    lowestVariantPrice
    hasDifferentVariantPricing
  }
  ${WheelVariantFragment}
  ${TireVariantFragment}
  ${CategoryFragment}
`;

export const ProductTileFragment = gql`
  fragment ProductTileFragment on ProductType {
    name
    id
    description
    brand
    hasDifferentVariantPricing
    lowestVariantPrice
  }
`;
