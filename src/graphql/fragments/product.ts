import { gql } from "@apollo/client"
import { WheelVariant, TireVariant } from "./variants"
import { Category } from "./category"

export const Product = gql`
  fragment Product on ProductType {
    name
    id
    image
    description
    category {
      ...Category
    }
    createdDate
    slug
    weight
    variants {
      ...WheelVariant
      ...TireVariant
    }
    brand
    lowestVariantPrice
    hasDifferentVariantPricing
  }
  ${WheelVariant}
  ${TireVariant}
  ${Category}
`

export const ProductTile = gql`
  fragment ProductTile on ProductType {
    name
    id
    description
    brand
    hasDifferentVariantPricing
    lowestVariantPrice
    image
  }
`
