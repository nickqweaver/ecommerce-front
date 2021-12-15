import { gql } from "@apollo/client"
import { WheelVariant, TireVariant } from "./variants"
import { Image } from "./image"

export const OrderItemResponse = gql`
  fragment OrderItemResponse on OrderItemResponseType {
    productName
    response
    message
    image {
      ...Image
    }
    productVariation {
      ...WheelVariant
      ...TireVariant
    }
  }
  ${WheelVariant}
  ${TireVariant}
  ${Image}
`
