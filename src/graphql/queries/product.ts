import { gql } from "@apollo/client";

export const GET_ALL_PRODUCT = gql`
  query getAllProducts {
    getAllProducts {
      ... on TireProductType {
        name
        lowestVariantPrice
        id
        brand
        variants {
          width
          productCode
          unitPrice
          rimCircumference
          height
        }
      }
      ... on WheelProductType {
        name
        lowestVariantPrice
        brand
        variants {
          finish
          boltPattern
          size
        }
      }
    }
  }
`;
