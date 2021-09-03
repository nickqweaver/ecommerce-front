import { gql } from "@apollo/client";

export const WheelVariantFragment = gql`
  fragment WheelVariantFragment on WheelVariantType {
    id
    productCode
    stock
    unitPrice
    size
    boltPattern
    finish
  }
`;

export const TireVariantFragment = gql`
  fragment TireVariantFragment on TireVariantType {
    id
    productCode
    stock
    unitPrice
    height
    width
    rimCircumference
  }
`;
