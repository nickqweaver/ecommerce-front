import { gql } from "@apollo/client"

export const WheelVariant = gql`
  fragment WheelVariant on WheelVariantType {
    id
    productCode
    stock
    unitPrice
    size
    boltPattern
  }
`

export const TireVariant = gql`
  fragment TireVariant on TireVariantType {
    id
    productCode
    stock
    unitPrice
    height
    width
    rimCircumference
  }
`
