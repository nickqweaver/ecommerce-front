import { gql } from "@apollo/client"
import { WheelVariant, TireVariant } from "../fragments/variants"

export const CREATE_ORDER = gql`
  mutation createOrder($orderItems: [OrderItemInput]) {
    createOrder(orderItems: $orderItems) {
      id
      status
      message
      orderItems {
        productVariation {
          ...WheelVariant
          ...TireVariant
        }
        status
        message
      }
    }
  }
  ${WheelVariant}
  ${TireVariant}
`
