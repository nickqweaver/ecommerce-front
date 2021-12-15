import { gql } from "@apollo/client"

export const Address = gql`
  fragment Address on AddressType {
    id
    name
    address1
    address2
    city
    state
    zipCode
    country
  }
`
export const CustomerProfile = gql`
  fragment CustomerProfile on ProfileType {
    id
    addresses {
      ...Address
    }
  }
  ${Address}
`
export const Customer = gql`
  fragment Customer on CustomerType {
    id
    username
    firstName
    lastName
    lastLogin
    dateJoined
    email
    profile {
      ...CustomerProfile
    }
  }
  ${CustomerProfile}
`
