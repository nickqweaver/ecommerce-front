import { gql } from "@apollo/client"
import { WheelVariant, TireVariant } from "../fragments/variants"
import { Image } from "../fragments/image"
import { OrderItemResponse } from "../fragments/orderItemResponse"

export const CREATE_ORDER = gql`
  mutation createOrder($orderItems: [OrderItemInput]) {
    createOrder(orderItems: $orderItems) {
      id
      status
      message
      orderItems {
        ...OrderItemResponse
      }
    }
  }
  ${WheelVariant}
  ${TireVariant}
  ${OrderItemResponse}
  ${Image}
`
