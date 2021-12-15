import { gql } from "@apollo/client"
import { Customer } from "../fragments/customer"

export const CREATE_CUSTOMER = gql`
  mutation createCustomer(
    $email: String!
    $username: String!
    $password: String!
  ) {
    createCustomer(email: $email, username: $username, password: $password) {
      success
      token
      customer {
        ...Customer
      }
    }
  }
  ${Customer}
`
