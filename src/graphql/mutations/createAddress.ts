import { gql } from "@apollo/client"
import { Address } from "../fragments/customer"

export const CREATE_ADDRESS = gql`
  mutation createAddress($address: AddressInput) {
    createAddress(address: $address) {
      success
      address {
        ...Address
      }
    }
  }
  ${Address}
`
