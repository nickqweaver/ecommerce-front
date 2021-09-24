import { gql } from "@apollo/client"
import { WheelVariant, TireVariant } from "./variants"
import { Category } from "./category"
import { Image } from "./image"

export const Product = gql`
  fragment Product on ProductType {
    variationOptions {
      label
      options
    }
    name
    id
    image {
      ...Image
    }
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
  ${Image}
`

export const ProductTile = gql`
  fragment ProductTile on ProductType {
    name
    id
    description
    brand
    hasDifferentVariantPricing
    lowestVariantPrice
    image {
      ...Image
    }
    slug
  }
  ${Image}
`
