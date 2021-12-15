import { gql } from "@apollo/client"
import { Customer } from "../fragments/customer"

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      success
      token
      customer {
        ...Customer
      }
    }
  }
  ${Customer}
`
