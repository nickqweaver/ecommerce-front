import { gql } from "@apollo/client"
import { TireVariant, WheelVariant } from "../fragments/variants"

export const GET_VARIANT_BY_ID = gql`
  query getVariantById($productId: ID!, $variantId: ID!) {
    getVariantById(productId: $productId, variantId: $variantId) {
      ... on WheelVariantType {
        ...WheelVariant
      }
      ... on TireVariantType {
        ...TireVariant
      }
    }
  }
  ${WheelVariant}
  ${TireVariant}
`
